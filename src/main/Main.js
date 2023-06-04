import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import logo1 from '../assets/banner1.png';
import logo2 from '../assets/banner2.png';
import logo3 from '../assets/banner3.png';
import styles from './Main.module.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Main() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 300; // 스크롤 임계값 설정

      if (scrollPosition > threshold) {
        if (!showText) {
          setShowText(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showText]);

  return (
    <>
      <div>
        <Swiper
          className={styles.banner}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide><img src={logo1} className={styles['App-logo']} alt="logo" /></SwiperSlide>
          <SwiperSlide><img src={logo2} className={styles['App-logo']} alt="logo" /></SwiperSlide>
          <SwiperSlide><img src={logo3} className={styles['App-logo']} alt="logo" /></SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.centered}>
        <p>
          1년에 버려지거나 잃어버린 반려동물의 수는 대략 13만 마리에 달한다고 합니다<br/>
          이마저도 20%는 결국 안락사로 생을 마감하게 됩니다<br/>
          이러한 상황에 처한 강아지들을 입양해 주세요
        </p>
      </div>

      <div className={styles.title}>
        <p className={showText ? styles.showText : ''}>
          Learn more<br/>
          about your dog
        </p>
      </div>

      <div className={styles.title}>
        <p>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
          dfdfsdfdfdddddd<br/>
        </p>
      </div>
    </>
  );
}

export default Main;
