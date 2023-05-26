import { BrowserRouter, Route, useHistory,Link } from 'react-router-dom';
import './Abandoned.css';
import { useState, useEffect,createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';

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
     
      
      const handleAnimalClick = (animal) => {
        history.push(`/animal/${animal.desertionNo}`, { animal });
      };
        
      
        return (
          
            <div>
               
            <ul className="animal-list">
            {abandonedAnimals.map((animal) => (
            <li key={animal.desertionNo}>
              <div className="animal-name" onClick={() => handleAnimalClick(animal)}>
                  <img src={animal.popfile} alt={animal.kindCd} />
                <p>{animal.kindCd}</p>
                <p>{animal.sexCd}</p>
              </div>
            </li>
          ))}
        </ul>
      <div className='pageNo'>
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


    
     
  );
}
export default Abandoned;