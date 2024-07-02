import React,{useEffect} from "react";
import "./OurVision.css";
import { NavLink } from "react-router-dom";

const OurVision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid our-vision">
        <div className="row first-row">
          <div className="col left-col"></div>
          <div className="col right-col">
            <h1>
              Inclusive Opportunities for All: Empowering Careers, Empowering
              Lives
            </h1>
            <p>
              At Rexglaxy Technology, our commitment to fostering diversity and
              inclusivity goes beyond the conventional boundaries. We recognize
              that talent knows no geographical or linguistic confines. Whether
              you hail from urban hubs or rural landscapes, whether English is a
              strong suit or an area for growth – we are here to offer equal
              chances for everyone to flourish in the dynamic world of IT.
            </p>
          </div>
        </div>
        <div className="row second-row">
          <h1>Our Inclusive Approach</h1>
          <div className="col">
            <div className="row first-row">
              <div className="col left-col">
                <h2>Equal Opportunity Employment:</h2>
                <p>
                  Rexglaxy Technology is dedicated to creating an environment
                  where opportunities are accessible to all. We believe in
                  meritocracy, ensuring that individuals are evaluated and
                  rewarded based on their skills, dedication, and potential
                  rather than external factors.
                </p>
              </div>
              <div className="col right-col"></div>
            </div>

            <div className="row second-row">
              <div className="col left-col"></div>
              <div className="col right-col">
                <h2>Bridge the Urban-Rural Divide:</h2>
                <p>
                  Our outreach initiatives extend to both urban and rural areas,
                  aiming to bridge the gap in technological access. By offering
                  training programs, mentorship, and employment opportunities,
                  we strive to empower individuals from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row third-row">
          <h1>Tailored Support for Every Journey</h1>
          <div className="col">
            <div className="row first-row">
              <div className="col left-col">
                <h2>1. Geography No Barrier:</h2>
                <p>
                  We actively seek talent from diverse locations, embracing the
                  richness that different perspectives bring to our team.
                  Whether you're in the heart of a bustling city or a tranquil
                  rural setting, your potential is what matters most.
                </p>
              </div>
              <div className="col right-col"></div>
            </div>

            <div className="row second-row">
              <div className="col left-col"></div>
              <div className="col right-col">
                <h2>2.Language-Inclusive Learning:</h2>
                <p>
                  Rexglaxy's training programs are designed to accommodate
                  individuals with varying language proficiencies. We believe
                  that diversity in language should never hinder one's ability
                  to thrive in the IT industry. Our training is focused on skill
                  development, irrespective of linguistic backgrounds.
                </p>
              </div>
            </div>

            <div className="row third-row">
              <div className="col left-col">
                <h2>3. Community-Centric Initiatives:</h2>
                <p>
                  We engage in community-centric initiatives to uplift and
                  empower local talent. By providing resources, education, and
                  mentorship, we aim to make a lasting impact on the careers and
                  lives of individuals in both urban and rural settings.
                </p>
              </div>
              <div className="col right-col"></div>
            </div>

            
          </div>
        </div>
        <div className="row fourth-row">
         <div className="col left-col">
            <div className="join-us-div">
                <NavLink to="/careers" className="btn">
                    Join Us
                </NavLink>
            </div>
         </div>
         <div className="col right-col">
            <h1>Join the Inclusivity Movement</h1>
            <p>Rexglaxy Technology invites you to be a part of a workplace where diversity is celebrated, and opportunities are extended to everyone, regardless of their background. Join us in building a future where talent and potential define success.
                <br />
Empower your career journey with Rexglaxy – where inclusivity is not just a value; it's the foundation of our success.
</p>
         </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
