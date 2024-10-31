import './FeaturedProject.scss';
import project1Image from '../../../assets/images/1.png';
import project2Image from '../../../assets/images/2.png';
import project3Image from '../../../assets/images/3.png';

const FeaturedProject = () => {
  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        <div className="project-large">
          <img src={project1Image} alt="Collaboration Platform" />
          {/* <p className="project-description">Collaboration Platform</p> */}
        </div>
        <div className="project-small">
          <img src={project2Image} alt="Ecommerce Platform" />
          {/* <p className="project-description">Ecommerce Platform</p> */}
        </div>
        <div className="project-small">
          <img src={project3Image} alt="B2B Platform" /> 
          {/* <p className="project-description">B2B Platform</p> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;