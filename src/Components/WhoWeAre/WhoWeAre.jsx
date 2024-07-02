import React, { useEffect } from 'react';
import "./WhoWeAre.css";


const WhoWeAre = () => {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
   <>
    <div className="contaienr-fluid who-we-are-page">
        <div className="row first-row">
            <div className="col left-col">
                <h1>WHO WE ARE</h1>
                <p>RexGalaxy Technology is a dynamic and forward-thinking IT company specializing in a comprehensive range of software solutions. From bespoke applications to robust enterprise systems, we cater to diverse industry needs, ensuring our clients stay ahead in the ever-evolving tech landscape.</p>
            </div>
            <div className="col right-col"><img src="/Media/logozz.png" alt="" /></div>
        </div>
        <div className="row second-row">
            <h1>What Sets Us Apart</h1>
            <div className="col">
                <div className="row first-row">
                    <div className="col left-col"></div>
                    <div className="col right-col">
                        <h2>Expertise in AI Systems</h2>
                        <p>One of our key strengths lies in our proficiency in artificial intelligence. We believe in harnessing the power of AI to elevate software functionality, enabling businesses to make smarter decisions, automate processes, and unlock new opportunities.</p>
                    </div>
                </div>
                <div className="row second-row">
                <div className="col left-col">
                    <h2>Comprehensive Software Solutions</h2>
                    <p>Whether you're a startup aiming for rapid growth or an established enterprise seeking digital transformation, RexGalaxy is your partner of choice. Our holistic approach ensures that our software solutions not only meet your current needs but also scale seamlessly to accommodate future requirements.</p>
                </div>
                <div className="col right-col"></div>
                </div>
                <div className="row third-row">
                <div className="col left-col"></div>
                <div className="col right-col">
                    <h2>Client-Centric Approach</h2>
                    <p>Your success is our priority. We work closely with our clients, understanding their unique challenges and goals to tailor solutions that align perfectly with their vision. Our client-centric approach fosters long-term partnerships built on trust, reliability, and exceptional results.</p>
                </div>
                </div>
            </div>
        </div>
        <div className="row third-row">
          <div className="col left-col">
            <h1>Our Team</h1>
            <p>Behind every successful project at RexGalaxy is a team of dedicated professionals. Our diverse and talented workforce brings together a wealth of experience and expertise, united by a passion for pushing the boundaries of what technology can achieve.</p>
          </div>
          <div className="col right-col"></div>
        </div>
        <div className="row fourth-row">
            <div className="col left-col"></div>
            <div className="col right-col">
                <h2>Join Us on the Journey</h2>
                <p>Embark on a transformative journey with RexGalaxy Technology. Explore the possibilities of our innovative software solutions and experience the impact of cutting-edge AI systems. Together, let's shape a future where technology empowers businesses to thrive.</p>
                <p>Discover the RexGalaxy advantage – where innovation meets reliability.</p>
                <div className="join-us-btn">
                    Join Us
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default WhoWeAre
