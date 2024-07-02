import React, { useEffect } from 'react';
import './OurValues.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurValues = () => {
    useEffect(()=>{
     Aos.init({duration:1500})   
    })
  return (
  <>
    <div className="container-fluid our-values">
        <h2>Our values</h2>
        <div className="row heading" >
            <h1>RexGalaxy Technology is not only a company ,it is a family.</h1>
        </div>
        <div className="row " >
            
            <div className="col" >
            <h2>Team Work</h2>
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/team-work.png" alt="" />
                
                We believe <strong>TEAMWORK</strong> empowers our individual strengths.
                <br />
                &nbsp;
            </div>
            <div className="col" >
            <h2>Integrity</h2>
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/integrity.png" alt="" />
               
                We believe <strong>SAFETY</strong> must be at the forefront of all our decision making.
            </div>
            <div className="col" >
            <h2>Safety</h2>
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/safety.png" alt="" />
                
                We believe <strong>INTEGRITY</strong> is at the heart of our individual and corporate actions
            </div>
        </div>
    </div>
  </>
  )
}

export default OurValues
