import React, { useEffect } from 'react';
import here from '../assets/pin.png';
import phone from '../assets/phone-call.png';
import styles from './location.module.css';

const { kakao } = window;

const Location2 = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5445853, 126.9556901),
      level: 2
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.5445853, 126.9556901);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <div className={styles.locationPage}>

        <div className={styles.locationInfo}>
          <div className={styles.title}>
            <h2>C.T종합동물병원</h2>
            <p>공덕 앞</p>
          </div>

        <div className={styles.Cont}>
          <div className={styles.container}>
            <img src={here} alt="Location Icon" />
            <p>서울특별시 마포구 만리재로 74(신공덕2차삼성래미안) 삼성래미안상가 117호</p>
          </div>

          <div className={styles.container}>
            <img src={phone} alt="Phone Icon" />
            <p>02-6375-0075</p>
          </div>
        </div>
        </div>

        <div className={styles.mapContainer}>
          <div id="map" style={{width: "100%", height: "900px"}}></div>
        </div>
    </div>

    </>        
  );
};

export default Location2;