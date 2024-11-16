import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProject.scss';
import project1Image from '../../../assets/images/1.png';
import project2Image from '../../../assets/images/2.png';
import project3Image from '../../../assets/images/3.png';

const FeaturedProject = () => {
  const containerRef = useRef(null);
  const [activeText, setActiveText] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;

      const inView = scrollTop > containerTop - window.innerHeight / 2;

      if (inView) {
        const progress = (scrollTop - containerTop) / containerHeight;
        const activeIndex = Math.min(Math.floor(progress * 3), 2); // Adjust for number of projects
        setCurrentProject(activeIndex);

        if (progress > 0.8) {
          setActiveText(true); // Show text and button when nearing the end
        } else {
          setActiveText(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="featured-projects">
      <h2 style={{ marginTop: '1rem' }}>Featured Projects</h2>
      <div className="projects-container" ref={containerRef}>
        <div
          className={`project ${currentProject === 0 ? 'active' : ''}`}
          style={{ marginTop: currentProject === 0 ? '2rem' : '0' }}
        >
          <Link to="/404-project1">
            <img src={project1Image} alt="Project 1" />
          </Link>
        </div>
        <div
          className={`project ${currentProject === 1 ? 'active' : ''}`}
        >
          <Link to="/404-project2">
            <img src={project2Image} alt="Project 2" />
          </Link>
        </div>
        <div
          className={`project ${currentProject === 2 ? 'active' : ''}`}
        >
          <Link to="/404-project3">
            <img src={project3Image} alt="Project 3" />
          </Link>
        </div>
      </div>
      <div className={`project-info ${activeText ? 'visible' : ''}`}>
        <p>See more projects from our happy clients all over the world</p>
        <button className="see-more-btn">See More</button>
      </div>
    </section>
  );
};

export default FeaturedProject;
