// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.scss';
import heroImg2 from '../../../assets/images/heroImg2.png';
import heroImg3 from '../../../assets/images/heroImg2.png';


const Hero = () => {
  return (
    <section className="hero">
      <h2>Building Reliable<br /> Software That Powers<br /> Engagement</h2>
      <p>At Kside, we create Software solutions that enhance user<br /> interactions and foster lasting connections</p>
      <div className="hero-btn">
        <button>Get Started <FaArrowRight className="custom-arrow" /></button>
        <button>Learn More</button>
      </div>
      <div className="hero-image">
        <img src={heroImg2} alt="Hero" />
        <img src={heroImg3} alt="Hero" />

      </div>
    </section>
  );
};
export default Hero;
