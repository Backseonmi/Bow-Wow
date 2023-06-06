import React from 'react';
import styles from './Community.module.css';

const Community = () => {
    return (
        <div>
            <h2 className={styles.h2}>COMMUNITY</h2>
            <p className={styles.p}>자유롭게 사람들과 꿀팁과 대화를 나누세요</p>
            <div>
                <button className={styles.post}>새 게시물 작성</button>
            </div>
            <table border={1} className={styles.Community}>
                <tr>
                    <td className={styles.title}>강아지는 이 음식을 먹으면 안 돼요!</td>
                    
                </tr>
            </table>
        </div>
    )
}

export default Community;