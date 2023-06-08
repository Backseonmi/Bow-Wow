import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, deleteUser, onAuthStateChanged } from 'firebase/auth';
import styles from './login.module.css';

// 파이어베이스 초기화
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    if (user) {
      // 이미 로그인된 상태이면 로그아웃 처리
      signOut(auth)
        .then(() => {
          setUser(null);
          console.log('로그아웃되었습니다.');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // 로그인되지 않은 상태이면 로그인 처리
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

  return (
    <div>
      {user ? (
        <div>
          <p>로그인된 사용자: {user.displayName}</p>
          <button onClick={handleGoogleLogin}>로그아웃</button>
          <button onClick={handleDeleteAccount}>회원 탈퇴</button>
        </div>
      ) : (
        <button onClick={handleGoogleLogin}>Google 로그인</button>
      )}
    </div>
  );
};

export default Login;
