import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import styles from './CommunityWrite.module.css';
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';
import { db, useAuth, useCurrentUser } from '../firebase';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const { currentUser } = useAuth();
  const currentUser = useCurrentUser();
  const fileInputRef = useRef();
  const history = useHistory();
  const storage = getStorage();
  console.log(currentUser)
  if(!currentUser) {
    return "사용자 정보를 불러오는 중입니다.";
  }
  const storageRef = ref(storage, `users/${currentUser.uid}/images`);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 1000) {
      setContent(value);
    }
  };

  const handleContentKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  };


  const handleSubmit = async () => {
    try {
      if (!currentUser) {
        console.log('로그인이 필요합니다.'); // 사용자가 로그인하지 않은 경우 처리
        alert('로그인이 필요합니다.');
        return;
      }
      if (!title) {
        console.log('제목을 입력하여 주세요.');
        alert('제목을 입력하여 주세요.');
        return;
      }
      if(!content){
        console.log('내용을 입력하여 주세요.');
        return;
      }

      const file = fileInputRef.current.files[0];
      let url = null;
      if(file) {
        const fileRef = ref(storageRef, file.name);
        const upload = await uploadBytes(fileRef, file);
        url = await getDownloadURL(upload.ref);
      }
      // 게시물 데이터를 Firestore에 저장
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        author: currentUser.displayName,
        date: getCurrentDate(), // 현재 날짜와 시간을 'date' 필드로 추가
        url //사진 링크
      });
      console.log('게시물이 성공적으로 작성되었습니다.');
      alert('게시물이 성공적으로 작성되었습니다.');
  
      // 게시물 작성 후 CommunityList로 자동 이동
      history.push('/community');
    } catch (error) {
      console.log('게시물 작성 중 오류가 발생했습니다.', error);
      alert('게시물 작성 중 오류가 발생했습니다.');
    }
  };  

  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>글 작성</h2>
      </div>

      <div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요."
          maxLength="30"
          className={styles.titleInput}
        />
      </div>

      <div>
        <textarea
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleContentKeyPress}
          placeholder="내용을 입력해주세요."
          maxLength="1000"
          className={styles.contentInput}
        />
        <p className={styles.limit}>
          <span>{content.length}</span>
          <span>/1000 자</span>
        </p>
      </div>

      <div className={styles.container}>
        <button onClick={handleSubmit} className={styles.comButton}>
          글쓰기
        </button>
        <input className={styles.munimg} type="file" ref={fileInputRef} accept="image/png" />
      </div>
    </>
  );
};

export default CommunityWrite;

