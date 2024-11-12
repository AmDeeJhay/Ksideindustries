import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/scss/pagination';
import 'swiper/swiper-bundle.min.css';
import './Hero.scss';

import analysis from '../../../assets/images/analysis.png';
import Mask from '../../../assets/images/Mask.png';
import charts from '../../../assets/images/charts.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Building Reliable<br /> Software That Powers<br /> Engagement</h2>
        <p>At Kside, we create Software solutions that<br /> enhance user interactions and foster lasting connections</p>
        <div className="hero-btn">
          <button>Get Started <FaArrowRight className="custom-arrow" /></button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        {isMobile ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide><img src={analysis} alt="analysis" /></SwiperSlide>
            <SwiperSlide><img src={Mask} alt="Mask" /></SwiperSlide>
            <SwiperSlide><img src={charts} alt="charts" /></SwiperSlide>
          </Swiper>
        ) : (
          <>
            <img src={analysis} alt="analysis" />
            <img src={Mask} alt="Mask" />
            <img src={charts} alt="charts" />
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
