import { useState, useEffect,createContext } from 'react';
import styles from './Shelter.module.css';

const Shelter = () => {
    const [abandonedAnimals, setAbandonedAnimals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=${currentPage}&numOfRows=12&upkind=417000&serviceKey=xVx1FHehEF76hU%2F46bzDm3weiutdQOt2d25anYdVqQfVKo4yIrkFmAyU5qDsOp7Zt86EcqFaL0JCLV%2Fx3Be1cA%3D%3D&_type=json`
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
        <div>
            <table>
        <thead>
          <tr>
            <th>관할구역</th>
            <th>보호센터명</th>
            <th>전화번호</th>
            <th>보호센터주소</th>
          </tr>
        </thead>
        <tbody>
        {abandonedAnimals.map((animal) => (
            <tr key={animal.desertionNo}>
              <td>{animal.orgNm}</td>
              <td>{animal.careNm}</td>
              <td>{animal.careTel}</td>
              <td>{animal.careAddr}</td>
            </tr>
            ))}
        </tbody>
      </table>
      <div className={styles.button}>
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
        </div>
        
    )
}

export default Shelter;