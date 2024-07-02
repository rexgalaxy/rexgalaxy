import React, { useEffect } from 'react';
import './ServicesPage.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const IndividualSericePage = (props) => {
  useEffect(()=>{
    Aos.init({duration:1000,offset:200})
  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="container-fluid individual-service-page">
     <div className="row d-flex" data-aos="fade-up">
         <div className="col image-col">
             <img src={props.imagepath} alt="img" data-aos="fade-right"/>
         </div>
         <div className="col text-col" data-aos="fade-left">
             <h1>{props.heading}</h1>
             <p>{props.para}</p>
         </div>
     </div>
     
     
     
    </div>
   </>
  )
}

export default IndividualSericePage;
