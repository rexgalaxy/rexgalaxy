import React from "react";
import "./TopSlide.css";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const TopSlide = () => {
  return (
    <>
      <div className="red-line"></div>
      <Carousel controls={false} pause={"hover" | false} indicators={false}>
        <CarouselItem interval={5000} >
          <div className="container-fluid top-slide-1">
            <div className="row top-slide-row slide-1">
              <h1 style={{borderLeft:"5px solid white"}}>
                Welcome to RexGalaxy Technology, <br />
                Where innovation meets excellence <br /> in the world of IT
                solutions
              </h1>
              <NavLink to="/who-we-are" className="learn-more-btn">Learn More &nbsp; &rarr;</NavLink>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem interval={5000}>
          <div className="container-fluid top-slide-2">
            <div className="row top-slide-row slide-2">
              <h1 style={{borderLeft:"5px solid white"}}>
                Leading the Way, <br /> Thinking Outside the Box, <br /> and
                Embracing Smart Tech
              </h1>
              At RexGalaxy, we lead with vision, foster creative solutions, and
              embrace the power of smart technology like GENAI for a brighter
              tomorrow.
              <NavLink to="/who-we-are" className="learn-more-btn">Learn More &nbsp; &rarr;</NavLink>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem interval={5000}>
          <div className="container-fluid top-slide-3">
            <div className="row top-slide-row slide-3">
              <h1 style={{borderLeft:"5px solid white"}}>
                RexGalaxy: Igniting <br /> Growth at Warp Speed
              </h1>
              As a beacon of innovation, RexGalaxy continues to surge forward,
              earning accolades as the fastest-growing company in the industry.
              <NavLink to="/who-we-are" className="learn-more-btn">Learn More &nbsp; &rarr;</NavLink>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem interval={5000}>
          <div className="container-fluid top-slide-4">
            <div className="row top-slide-row slide-4">
              <h1 style={{borderLeft:"5px solid white"}}>
                Unmatched Velocity: <br /> RexGalaxy Meteoric Rise
              </h1>
              Experience the exhilarating journey with RexGalaxy, where its
              meteoric rise is a testament to unparalleled speed in sustained
              growth.
              <NavLink to="/who-we-are" className="learn-more-btn">Learn More &nbsp; &rarr;</NavLink>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem interval={5000}>
          <div className="container-fluid top-slide-5">
            <div className="row top-slide-row slide-5">
              <h1 style={{borderLeft:"5px solid white"}}>
                RexGalaxy: <br /> Shaping the Future of AI
              </h1>
              Journey into the next frontier with RexGalaxy, where cutting-edge
              innovation and AI convergence pave the way for a transformative
              and intelligent future.
              <NavLink to="/who-we-are" className="learn-more-btn">Learn More &nbsp; &rarr;</NavLink>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem interval={5000}>
          <div className="container-fluid top-slide-6">
            <div className="row top-slide-row slide-6">
              <h1 style={{borderLeft:"5px solid white"}}>
                Shoulder to Shoulder: <br /> Building the Future Together
              </h1>
              Join RexGalaxy on a collaborative journey, as we stand united,
              shoulder to shoulder, building a shared future filled with
              innovation and success.
              <NavLink to="/who-we-are" className="learn-more-btn">Learn More &nbsp; &rarr;</NavLink>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default TopSlide;
