import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc } from 'firebase/firestore';
import { db, useAuth } from '../firebase';
import { useHistory } from 'react-router-dom';
import styles from './CommunityWrite.module.css';
import { ref, uploadBytes, getStorage, getDownloadURL  } from 'firebase/storage';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { currentUser } = useAuth();
  const fileInputRef = useRef();
  const history = useHistory();
  const storage = getStorage();
  const storageRef = ref(storage, `users/${currentUser.uid}/images`);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const handleFileUpload = async (file) => {
    try {
      const fileRef = ref(storageRef, file.name);
      const upload = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(upload.ref);
      debugger;
      console.log('사진이 성공적으로 업로드되었습니다.');
    } catch (error) {
      console.log('사진 업로드 중 오류가 발생했습니다.', error);
      alert('사진 업로드 중 오류가 발생했습니다.');
    }
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
      history.push('/bow');
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
        className={styles.titleInput}/>
    </div>

    <div>
      <input
        type="text"
        value={content}
        onChange={handleContentChange}
        placeholder="내용을 입력해주세요."
        className={styles.contentInput}/>
    </div>

    <div className={styles.container}>
      <button onClick={handleSubmit} className={styles.comButton}>글쓰기</button>
      <input type="file" ref={fileInputRef} accept="image/png" />
    </div>
    </>
  );
};

export default CommunityWrite;
