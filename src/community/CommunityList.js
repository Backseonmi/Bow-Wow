import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, deleteDoc, doc } from '../firebase';
import styles from './CommunityList.module.css';
import { db } from '../firebase';

const CommunityList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // Firebase Firestore에서 게시물 목록을 실시간으로 감지
    onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    });
  }, []);

  const removeTags = (str) => {
    if (str === null || str === '') return false;
    else if (typeof str === 'string') {
      return str.replace(/(<([^>]+)>)/gi, '');
    } else {
      return String(str).replace(/(<([^>]+)>)/gi, '');
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(collection(db, 'posts'), postId));
      console.log('게시물이 성공적으로 삭제되었습니다.');
    } catch (error) {
      console.log('게시물 삭제 중 오류가 발생했습니다.', error);
    }
  };
  
  const totalPages = Math.ceil(posts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = posts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className={styles.h2}>COMMUNITY</h2>
      <p className={styles.p}>자유롭게 사람들과 꿀팁과 대화를 나누세요</p>
      <Link to="/community/write">
        <button className={styles.post}>새 게시물 작성</button>
      </Link>

      <table border={1} className={styles.Community}>
        <tbody>
            {currentPosts.map((post) => (
            <tr key={post.id}>
                <td className={styles.title}>{removeTags(post.title)}</td>
                <td>
                <button onClick={() => handleDelete(post.id)}>삭제</button>
                </td>
            </tr>
            ))}
        </tbody>
      </table>

      <div className={styles.nextButton}>
        {Array.from({ length: totalPages }, (_, index) => (
            <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? styles.active : ''}
            >
                {index + 1}
            </button>
        ))}
      </div>
    </div>
  );
};

export default CommunityList;
