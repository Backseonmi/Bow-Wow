import styles from './Shelter.module.css';
import React,{useRouter} from 'react';
import { useHistory } from 'react-router-dom';


const Shelter = () => {

    const history = useHistory();

    const onsubmit1 = () => {
      history.push('/location1'); // '/location1' 경로로 이동하도록 설정
    };
    const onsubmit2 = () => {
        history.push('/location2'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit3 = () => {
        history.push('/location3'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit4 = () => {
        history.push('/location4'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit5 = () => {
        history.push('/location5'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit6 = () => {
        history.push('/location6'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit7 = () => {
        history.push('/location7'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit8 = () => {
        history.push('/location8'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit9 = () => {
        history.push('/location9'); // '/location1' 경로로 이동하도록 설정
      };
      const onsubmit10 = () => {
        history.push('/location10'); // '/location1' 경로로 이동하도록 설정
      };

    return (
      <div className={styles.Cont}>
        <div className={styles.container} onClick={onsubmit1}>
            <h2>21세기동물병원</h2> 
        </div>
        <div className={styles.container} onClick={onsubmit2}>
            <h2>C.T종합동물병원</h2>         
        </div>
        <div className={styles.container} onClick={onsubmit3}>
            <h2>GD동물병원</h2>        
        </div>
        <div className={styles.container} onClick={onsubmit4}>
            <h2>강동구청 반려동물팀</h2>       
        </div>
        <div className={styles.container} onClick={onsubmit5}>
            <h2>강동리본센터</h2>           
        </div>
        <div className={styles.container} onClick={onsubmit6}>
            <h2>강현림동물병원</h2>
        </div>
        <div className={styles.container} onClick={onsubmit7}>
            <h2>남산동물병원</h2>        
        </div>
        <div className={styles.container} onClick={onsubmit8}>
            <h2>노원반려동물분화센터</h2>
        </div>
        <div className={styles.container} onClick={onsubmit9}>
            <h2>둔촌동물병원</h2>       
        </div>
        <div className={styles.container} onClick={onsubmit10}>
            <h2>디아크동물종합병원</h2>       
        </div>
      </div>
    )   
}

export default Shelter;