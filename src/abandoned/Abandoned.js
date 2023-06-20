import { BrowserRouter, Route, useHistory,Link } from 'react-router-dom';
import { useState, useEffect,createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Abandoned.module.css';

export const AnimalContext = createContext();

const Abandoned = (props) => {

    const [abandonedAnimals, setAbandonedAnimals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=${currentPage}&numOfRows=15&upkind=417000&serviceKey=xVx1FHehEF76hU%2F46bzDm3weiutdQOt2d25anYdVqQfVKo4yIrkFmAyU5qDsOp7Zt86EcqFaL0JCLV%2Fx3Be1cA%3D%3D&_type=json`
            );
            const data = await response.json();
            setAbandonedAnimals(data.response.body.items.item);
            setTotalPages(Math.ceil(data.response.body.totalCount / 10));
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [currentPage]);
    
      const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
      };
    
      const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
      };
      
        return (
            <>
              <div className={styles.title}>
                <h2>유기견 입양</h2>
                <p className={styles.no}>이쁘다고 입양하지 마세요. 신중하게 생각하시고 입양하세요.</p>
              </div>

            <ul className={styles.animallist}>
            {abandonedAnimals.map((animal) => (
            <li key={animal.desertionNo}>
              <div className={styles.animalname}>
                  <img src={animal.popfile} className={styles.doggimge} alt={animal.kindCd} />
                <p className={styles.kind}>{animal.kindCd}</p>
                <p className={styles.sex}>{animal.sexCd}</p>
              </div>
            </li>
          ))}
        </ul>

      <div className={styles.pageNo}>
        <button onClick={handlePrevClick} disabled={currentPage === 1} type="button" class="btn btn-outline-dark">
          이전
        </button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          type="button" class="btn btn-outline-dark"
        >
          다음
        </button>
      </div>
     
    </>


    
     
  );
}
export default Abandoned;