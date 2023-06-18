import React, { useEffect } from 'react';
import here from '../assets/pin.png';
import phone from '../assets/phone-call.png';
import styles from './location.module.css';

const { kakao } = window;

const Location1 = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5284494, 127.1321057),
      level: 2
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.5284494, 127.1321057);
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
            <h2>강동리본센터</h2>
            <p>둔촌동 앞</p>
          </div>

        <div className={styles.Cont}>
          <div className={styles.container}>
            <img src={here} alt="Location Icon" />
            <p>서울특별시 강동구 양재대로81길 73(성내동)</p>
          </div>
          
          <div className={styles.container}>
            <img src={phone} alt="Phone Icon" />
            <p>02-4163-7350</p>
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

export default Location1;