import React, { useEffect } from "react";
import "./HomePage.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";

const AboutUs = () => {
    useEffect(()=>{
        Aos.init({offset:200})
    })
  return (
    <>
      <div className="container-fluid homePage-aboutUs-section">
        <div className="row heading">
          <div className="col">Who We Are</div>
        </div>
        <div className="row">
          <div className="col img-col">
            <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/who-we-are01.png" alt="img" data-aos="fade-right"/>
          </div>
          <div className="col text-col" data-aos="fade-left">
            At our software company, our mission is to revolutionize the way
            people interact with technology by developing innovative and
            user-centric software solutions.
          </div>
        </div>
        <div className="row">
          <div className="col text-col" data-aos="fade-right">
            Unlocking career prospects, we facilitate IT industry’s embrace,
            Empowering individuals to master cutting-edge tech, paving their
            way. Empowering businesses, we offer cost-saving solutions,
            Harnessing technology’s prowess, optimizing software’s evolution
          </div>
          <div className="col img-col">
            <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/who-we-are02.png" alt="img" data-aos="fade-left"/>
          </div>
        </div>
        <div className="row">
            <div className="col btn-col">
                <NavLink to="/who-we-are" id="who-we-are-know-more-btn">Know more</NavLink>
            </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
