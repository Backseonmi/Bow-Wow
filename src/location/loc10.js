import React, { useEffect } from 'react';
import here from '../assets/pin.png';
import phone from '../assets/phone-call.png';
import styles from './location.module.css';

const { kakao } = window;

const Location10 = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5116512, 126.9390578), 
      level: 2
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.5116512, 126.9390578);
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
            <h2>디아크동물종합병원</h2>
            <p>반찬앤도시락 앞</p>
          </div>

        <div className={styles.Cont}>
          <div className={styles.container}>
            <img src={here} alt="Location Icon" />
            <p>서울특별시 동작구 장승배기로27길 18(노량진동)</p>
          </div>

          <div className={styles.container}>
            <img src={phone} alt="Phone Icon" />
            <p>02-816-7582</p>
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

export default Location10;