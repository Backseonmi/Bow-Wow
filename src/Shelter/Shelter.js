import styles from './Shelter.module.css';
import hos from '../img/hos.png';
import here from '../img/here.png';
import phone from '../img/phone.png';

const Shelter = () => {
    return (
      <div>
        <div className={styles.container}>
            <img src={hos}/><h2>21세기동물병원</h2>
            <img src={here}/><p>서울특별시 용산구 보광동 259-1</p>
            <img src={phone}/><p>02-749-6750</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>C.T종합동물병원</h2>
            <img src={here}/><p>서울특별시 마포구 만리재로 74(신공덕도으 신공덕2차삼성래미안) 삼성래미안상가 117호</p>
            <img src={phone}/><p>02-6375-0075</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>GD동물병원</h2>
            <img src={here}/><p>서울특별시 강동구 상일로 16 (상일동) 1~2층 GD동물병원</p>
            <img src={phone}/><p>02-429-8822</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>강동구청 반려동물팀</h2>
            <img src={here}/><p>서울특별시 강동구 성내로 25 (성내동, 강동구청)강동구청</p>
            <img src={phone}/><p>02-3425-6015</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>강동리본센터</h2>
            <img src={here}/><p>서울특별시 강동구 양재대로81길 73(성내동)</p>
            <img src={phone}/><p>02-4163-7350</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>강현림동물병원</h2>
            <img src={here}/><p>서울특별시 양천구 등촌로 160 (목동) 1층</p>
            <img src={phone}/><p>02-2642-9159</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>강현림동물병원</h2>
            <img src={here}/><p>서울특별시 양천구 등촌로 160(목동) 1층</p>
            <img src={phone}/><p>02-2642-9159</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>남산동물병원</h2>
            <img src={here}/><p>서울특별시 용산구 호암동 244-60</p>
            <img src={phone}/><p>02-778-7582</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>노원반려동물분화센터</h2>
            <img src={here}/><p>서울특별시 노원구 수란산로 258 (상계동, 호성빌딩) 1층</p>
            <img src={phone}/><p>02-933-8500</p>            
        </div>
        <div className={styles.container}>
            <img src={hos}/><h2>둔촌동물병원</h2>
            <img src={here}/><p>서울특별시 강동구 양재대로 1335(성내동) 둔촌동물병원</p>
            <img src={phone}/><p>02-474-5100</p>            
        </div>
        <footer>
          
        </footer>
      </div>
    )   
}

export default Shelter;