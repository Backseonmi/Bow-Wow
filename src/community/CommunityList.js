import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, doc } from '../firebase';
import styles from './CommunityList.module.css';
import { db, useCurrentUser } from '../firebase';
import { useHistory } from 'react-router-dom';

const CommunityList = () => {
  const [posts, setPosts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가
  const currentUser = useCurrentUser();
  console.log(currentUser);

  useEffect(() => {
    // Firebase Firestore에서 게시물 목록을 실시간으로 감지
    onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const sortedPosts = postsData.sort((a, b) => {
        // 날짜를 기준으로 내림차순으로 정렬
        const dateComparison = b.date.localeCompare(a.date);
        if (dateComparison !== 0) {
          return dateComparison;
        }
        // 같은 날짜인 경우 가장 최신에 쓴 게시물이 맨 위로 올라오도록 정렬
        return b.id.localeCompare(a.id);
      });
      setPosts(sortedPosts);
    });
  }, []);

  const history = useHistory();

  const handleRowClick = (postId) => {
    localStorage.setItem('communityDetailScrollPostId', postId);
    history.push(`/community/detail/${postId}`);
  };

  useEffect(() => {
    localStorage.setItem('communityListCurrentPage', currentPage.toString());
  }, [currentPage]);

  const totalPages = Math.ceil(posts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = posts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const filteredPosts = currentPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className={styles.h2}>COMMUNITY</h2>
      <p className={styles.p}>자유롭게 사람들과 꿀팁과 대화를 나누세요</p>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
        className={styles.search}
      />

      <Link to="/community/write">
        <button className={styles.newPost}>새 게시물 작성</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post, index) => (
            <tr key={post.id} onClick={() => handleRowClick(post.id)}>
              <td>{startIndex + index + 1}</td> {/* 번호 수정 */}
              <td className={styles.title}>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
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
