// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.scss';
import analysis from '../../../assets/images/analysis.png';
import Mask from '../../../assets/images/Mask.png';
import charts from '../../../assets/images/charts.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Building Reliable<br /> Software That Powers<br /> Engagement</h2>
        <p>At Kside, we create Software solutions that enhance user<br /> interactions and foster lasting connections</p>
        <div className="hero-btn">
          <button>Get Started <FaArrowRight className="custom-arrow" /></button>
          <button>Learn More</button>
        </div>
      </div>
      
      <div className="hero-image">
        <img src={analysis} alt="analysis" />
        <img src={Mask} alt="Mask" />
        <img src={charts} alt="charts" />
      </div>
    </section>
  );
};

export default Hero;
