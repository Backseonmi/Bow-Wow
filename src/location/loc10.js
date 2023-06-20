import React, { useEffect } from 'react';

const { kakao } = window;

const Location1 = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5277932, 127.1455505),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.5277932, 127.1455505);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "1300px", height: "450px", marginLeft:"100px" }}></div>
      <p style={{backgroundColor:"#DAE5D0", margin:"0", width:"1300px",marginLeft :"100px", height:"90px"}}>강동 앞</p>
    </div>
  );
};

export default Location1;