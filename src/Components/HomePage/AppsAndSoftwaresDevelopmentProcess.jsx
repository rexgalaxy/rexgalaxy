import React, { useEffect } from 'react';
import './HomePage.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const AppsAndSoftwaresDevelopmentProcess = () => {
    useEffect(()=>{
        Aos.init({duration:1000,offset:300})
    })
  return (
  <>
   <div className="container-fluid development-process-section">

    <div className="row" data-aos="fade-up">
        <div className="col">
            <h1>Our Applications, Softwares And Websites Development 6-Step Process</h1>
        </div>
    </div>

    <div className="row" data-aos="fade-up">
        <div className="col d-flex" data-aos="fade-right"><img src="Media/one.png" alt="img" /></div>
        <div className="col"><h2>Consultation</h2>We start by understanding your project requirements, goals, and vision. During this phase, we discuss the concept, target audience, and desired features of your app.
        </div>
        <div className="col" data-aos="fade-left"><img src="Media/consultation.png" alt="img" /></div>
    </div>

    <div className="row arrow-row" data-aos="fade-down">
        <div className="col arrow-col"><img src="Media/skyblue-arrow.png" alt="arrow" style={{rotate:"40deg",height:"13rem"}}/></div>
    </div>
    
    <div className="row" data-aos="fade-up">
        <div className="col" data-aos="fade-right"><img src="Media/two.png" alt="img" /></div>
        <div className="col">
            <h2>Design and Prototyping </h2>Our design team creates wireframes and prototypes to visualize the app's layout and functionality. We collaborate with you to ensure the design aligns with your vision.
        </div>
        <div className="col" data-aos="fade-left"><img src="Media/designing-and-prototyping.png" alt="img" /></div>
    </div>

    <div className="row arrow-row" data-aos="fade-down">
        <div className="col arrow-col"><img src="Media/skyblue-arrow.png" alt="arrow" style={{rotate:"40deg",height:"13rem"}}/></div>
    </div>


    <div className="row" data-aos="fade-up">
        <div className="col" data-aos="fade-right"><img src="Media/three.png" alt="img" /></div>
        <div className="col"><h2>Development</h2>Our skilled developers bring the design to life, coding the app's features, functionality, and integrations. We conduct rigorous testing to ensure a bug-free and smooth user experience.
        </div>
        <div className="col" data-aos="fade-left"><img src="Media/deployment.png" alt="img" /></div>
    </div>

    <div className="row arrow-row" data-aos="fade-down">
        <div className="col arrow-col"><img src="Media/skyblue-arrow.png" alt="arrow" style={{rotate:"40deg",height:"13rem"}}/></div>
    </div>


    <div className="row" data-aos="fade-up">
        <div className="col" data-aos="fade-right"><img src="Media/four.png" alt="img" /></div>
        <div className="col"><h2>Testing and Quality Assurance</h2>We perform thorough testing, including functionality testing, usability testing, and performance testing, to guarantee that your app meets the highest quality standards.</div>
        <div className="col" data-aos="fade-left"><img src="Media/testing-and-quality-assurance.png" alt="img" /></div>
    </div>

    <div className="row arrow-row" data-aos="fade-down">
        <div className="col arrow-col"><img src="Media/skyblue-arrow.png" alt="arrow" style={{rotate:"40deg",height:"13rem"}}/></div>
    </div>


    <div className="row" data-aos="fade-up">
        <div className="col" data-aos="fade-right"><img src="Media/five.png" alt="img" /></div>
        <div className="col"><h2>Deployment</h2>
        Once your app is ready, we assist with the App Store submission process, ensuring it complies with Apple's guidelines and is ready for download by your target audience.</div>
        <div className="col" data-aos="fade-left"><img src="Media/ios1.png" alt="img" /></div>
    </div>

    <div className="row arrow-row" data-aos="fade-down">
        <div className="col arrow-col"><img src="Media/skyblue-arrow.png" alt="arrow" style={{rotate:"40deg",height:"13rem"}}/></div>
    </div>

    <div className="row" data-aos="fade-up">
        <div className="col" data-aos="fade-right"><img src="Media/six.png" alt="img" /></div>
        <div className="col"><h2>Maintenance and Support</h2>
        Our commitment to your success extends beyond the launch. We offer ongoing maintenance and support to address any issues, implement updates, and keep your app current.</div>
        <div className="col" data-aos="fade-left"><img src="Media/ios1.png" alt="img" /></div>
    </div>

    <div className="row d-flex flex-column my-4">
        <div className="col heading">
            <h2 className='text-center'>Let's Build Something Extraordinary</h2>
        </div>
        <div className="col">
            <div className="row d-flex">
                <div className="col px-5">Ready to embark on a journey of innovation and creativity? Let's start building your Software/Application app today. Contact us to discuss your project, and let  App Innovators be your trusted partner in app development.</div>
                <div className="col px-5">
                At <strong>RexGalaxy</strong>, we're dedicated to delivering top-notch Mobile and Web app development services that help you achieve your goals and make a lasting impact in the iOS app ecosystem.
                </div>
                <div className="col px-5">Whether you're a startup with a groundbreaking idea or an established business looking to modernize your mobile presence,  App Innovators is here to turn your vision into reality. Join hands with us to create mobile apps that captivate, engage, and deliver exceptional value to your users.</div>
            </div>
            <div id='get-in-touch-row' className="row my-5">
                <NavLink to='/contactUs' id='get-in-touch-btn'>Get in touch</NavLink>
            </div>
        </div>
    </div>

   </div>


  </>
  )
}

export default AppsAndSoftwaresDevelopmentProcess
