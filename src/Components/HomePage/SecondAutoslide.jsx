import React from 'react';
import './SecondAutoslide.css';
import  Carousel  from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SecondAutoslide = () => {
  return (
  <div className="container-fluid second-autoslide">
   <div className="row">
    <div className="col left-col">
      <Carousel controls={false} indicators={false} pause={"hover"|false}  >
        <CarouselItem interval={1500}>
        <h3 className='left-heading' style={{ color: "rgb(238, 92, 38)",
    letterSpaceing: "3px"}}>Cutting-Edge Technology</h3>
       Rexgalaxy pioneers the future of web and mobile applications with state-of-the-art technology, ensuring our solutions are at the forefront of innovation and user experience.
        <br/>
        <br />
        <NavLink to="/services" id='left-btn'>KNOW MORE</NavLink>
        </CarouselItem>
        <CarouselItem interval={1500}>
        <h3 className='left-heading' style={{ color: "rgb(238, 92, 38)",
    letterSpaceing: "3px"}}>Tailored Solutions</h3>
        We specialize in crafting bespoke web and mobile applications that precisely meet our clients' needs. Our solutions are meticulously designed to enhance functionality and user satisfaction.
        <br/>
        <br />
        <NavLink to="/services" id='left-btn'>KNOW MORE</NavLink>
        </CarouselItem>

        <CarouselItem interval={1500}>
        <h3 className='left-heading' style={{ color: "rgb(238, 92, 38)",
    letterSpaceing: "3px"}}>Scalability and Performance</h3>
        Rexgalaxy ensures your applications are not only feature-rich but also scalable and high-performing. We employ robust architectures to handle growing user demands, guaranteeing optimal user experiences.
        <br/>
        <br />
        <NavLink to="/services" id='left-btn'>KNOW MORE</NavLink>
        </CarouselItem>

        <CarouselItem interval={1500}>
        <h3 className='left-heading' style={{ color: "rgb(238, 92, 38)",
    letterSpaceing: "3px"}}>User-Centric Design</h3>
        Putting users first, our designs prioritize intuitive interfaces and seamless interactions. Rexgalaxy guarantees that every user journey is enjoyable, fostering engagement and brand loyalty.
        <br/>
        <br />
        <NavLink to="/services" id='left-btn'>KNOW MORE</NavLink>
        </CarouselItem>

        <CarouselItem interval={1500}>
        <h3 className='left-heading' style={{ color: "rgb(238, 92, 38)",
    letterSpaceing: "3px"}}>Security and Reliability</h3>
       At Rexgalaxy, security is paramount. Our web and mobile applications are built with cutting-edge security measures, assuring both our clients and their users of a secure and reliable digital experience.
        <br/>
        <br />
        <NavLink to="/services" id='left-btn'>KNOW MORE</NavLink>
        </CarouselItem>

        
      </Carousel>
    </div>
    <div className="col">
        <div className="right-col">
           <h3>Future of Web and Mobile Applications</h3>
           "Seamless integration, AI-driven experiences, 5G speed, immersive AR, cross-platform harmony, voice interactions, secure blockchain, IoT connectivity."
           <br />
           <br />
           <NavLink id="right-btn" to="/services">KNOW MORE</NavLink>
        </div>
    </div>
   </div>
  </div>
  )
}

export default SecondAutoslide
