import './KsideDriven.scss';
import { FaUserAlt, FaPaintBrush, FaBrain, FaClock } from 'react-icons/fa';

const KsideDriven = () => {
  return (
    <section className="kside-driven">
      <div className="kside-content">
        <h2>We have Driven<br /> innovators, creators,<br /> and visionaries.</h2>
        <p>We are the go-to company for handling various<br /> frameworks. Our journey is defined by<br /> commitment to excellence and passion for<br /> delivering outstanding results.</p>
      </div>
      <div className="info-boxes">
        <div className="box"><FaUserAlt className="icon" />Client-centric Approach<p>we put you in the drivers seat, making sure everything we build fits your needs perfectly</p></div>
        <div className="box"><FaPaintBrush className="icon" />Creative Excellence<p>our creative juises are always flowing, delivering designs that really pops and stands out</p></div>
        <div className="box"><FaBrain className="icon" />Strategic Thinking<p>we put you in the drivers seat, making sure everything we build fits your needs perfectly</p></div>
        <div className="box"><FaClock className="icon" />Timely Delivery<p>we put you in the drivers seat, making sure everything we build fits your needs perfectly</p></div>
      </div>
    </section>
  );
};

export default KsideDriven;
