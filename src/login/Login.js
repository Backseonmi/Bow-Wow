import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, deleteUser, onAuthStateChanged } from 'firebase/auth';
import styles from './login.module.css';
import logo1 from '../assets/googleLogo.png';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import defaultProfileImage from '../assets/defaultUser.png';

const firebaseConfig = {
  // 파이어베이스 설정 정보 입력
  apiKey: "AIzaSyAECUp96A7cEUIP6V_SBfi6P_aEBMR_Bbo",
  authDomain: "bow-wow-1d728.firebaseapp.com",
  projectId: "bow-wow-1d728",
  storageBucket: "bow-wow-1d728.appspot.com",
  messagingSenderId: "159391067710",
  appId: "1:159391067710:web:455ea88cab4fccd2ae2b6f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2초 후 로딩 상태 변경

    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    if (user) {
      signOut(auth)
        .then(() => {
          setUser(null);
          console.log('로그아웃되었습니다.');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          const userData = result.user;
          setUser(userData);
          console.log(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDeleteAccount = () => {
    const currentUser = auth.currentUser;
    deleteUser(currentUser)
      .then(() => {
        setUser(null);
        console.log('회원 탈퇴되었습니다.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Profile = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(null);
  
    useEffect(() => {
      if (user) {
        const db = getFirestore(app);
        const userRef = doc(db, 'users', user.uid);
  
        getDoc(userRef)
          .then((snapshot) => {
            const userData = snapshot.data();
            if (userData && userData.profileImageUrl) {
              setProfileImageUrl(userData.profileImageUrl);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [user]);
  
    const handleImageUpload = async (event) => {
      const file = event.target.files[0];
  
      const storage = getStorage(app);
      const storageRef = ref(storage, 'profile-images/' + file.name);
      await uploadBytes(storageRef, file);
  
      // 사용자 데이터에 프로필 이미지 URL 저장
      if (user) {
        const imageUrl = await getDownloadURL(storageRef);
        setProfileImageUrl(imageUrl);
  
        const db = getFirestore(app);
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, { profileImageUrl: imageUrl }, { merge: true });
      }
    };

    return (
      <>
      {profileImageUrl ? (
        <div className={styles.onerow}>
          <img src={profileImageUrl} className={styles.defaultImage} alt="프로필 사진" />
          <input className={styles.logimg} type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      ) : (
        <div className={styles.onerow}>
          <img src={defaultProfileImage} className={styles.defaultImage} alt="기본 프로필 사진" />
          <input className={styles.logimg} type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      )}
      </>
    );
  };

  return (
    <>
      {loading ? ( // 로딩 상태에 따라 로딩 텍스트 또는 로그인 컴포넌트를 렌더링
        <div className={styles.loadingText}>사용자 정보를 가져오는 중입니다...</div> // 로딩 중일 때 보여줄 텍스트
      ) : (
        user ? (
          <>
            <div className={styles.divCenter}>
              <Profile />
              <p className = {styles.nowlogin}>로그인된 사용자: {user.displayName}</p>
            </div>
            <div className={styles.buttons}>
              <button className={styles.logout} onClick={handleGoogleLogin}>로그아웃</button>
              <button className={styles.signout} onClick={handleDeleteAccount}>회원 탈퇴</button>
            </div>
          </>
        ) : (
          <div className={styles.line}>
            <div>
              <h1 className={styles.title}>Login</h1>
            </div>
            <div className={styles.parentDiv}>
              <button className={styles.button} onClick={handleGoogleLogin}>
                <img src={logo1} className={styles['Google-Logo']} alt="logo" />
                Sign in with Google
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Login;
