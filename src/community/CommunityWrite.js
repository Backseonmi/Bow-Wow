import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';
import styles from './CommunityWrite.module.css';

const CommunityWrite = () => {
  const modules = {
    toolbar: [
      [{'header': [1,2,3,4,5,6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{'align' : []}, {'color': []}, {'background': [] }],
      ['clean']
    ],
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async () => {
    try {
      // 게시물 데이터를 Firestore에 저장
      await addDoc(collection(db, 'posts'), { title: content, content });
  
      console.log('게시물이 성공적으로 작성되었습니다.');
  
      // 게시물 작성 후 CommunityList로 자동 이동
      history.push('/bow');
    } catch (error) {
      console.log('게시물 작성 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <>
      <div>
        <h2>글 작성</h2>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요."
          className={styles.titleInput}
        />
        <ReactQuill
          value={content}
          modules={modules}
          placeholder="내용을 입력해주세요."
          onChange={handleContentChange}
          className={styles.qleditor}
        />
        <button onClick={handleSubmit} className={styles.post}>
          작성 완료
        </button>
      </div>
    </>
  );
};

export default CommunityWrite;
