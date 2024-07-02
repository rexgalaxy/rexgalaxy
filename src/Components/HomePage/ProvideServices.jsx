import React from "react";
import "./HomePage.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CoPresentIcon from '@mui/icons-material/CoPresent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import KeyIcon from '@mui/icons-material/Key';

function ProvideServices() {
  return (
    <>
   
      <div className="provide-services container-fluid">
        <div className="row d-flex flex-column">
          <div className="col">
            <h2>Software Development Services We Provide</h2>
            <p>
              Tailored Solutions for Every Need
              <br />
              Explore our range of software development services
            </p>
          </div>
          <div className="col">
            <div className="row d-flex flex-lg-row flex-column align-items-center justify">
              <div className="col col-2" style={{ overflow: "hidden",marginBlock:"3rem" }}>
                <StayPrimaryPortraitIcon
                  style={{ fontSize: "50px", marginTop: "-100px" }}
                />
                <p>
                  Mobile App <br />
                  Development
                </p>
              </div>
              <div className="col col-2" style={{ overflow: "hidden",marginBlock:"3rem" }}>
                <TravelExploreIcon
                  style={{ fontSize: "50px", marginTop: "-100px" }}
                />
                <p>
                  Web App <br />
                  Development
                </p>
              </div>
              <div className="col col-2" style={{ overflow: "hidden",marginBlock:"3rem" }}>
                <ShoppingCartIcon
                  style={{ fontSize: "50px", marginTop: "-100px" }}
                />
                <p>
                  E-commerce
                  <br />
                  Solutions
                </p>
              </div>
              <div className="col col-2" style={{ overflow: "hidden",marginBlock:"3rem" }}>
                <CoPresentIcon
                  style={{ fontSize: "50px", marginTop: "-100px" }}
                />
                <p>
                UI/UX
                  <br />
                  Design
                </p>
              </div>
              <div className="col col-2" style={{ overflow: "hidden",marginBlock:"3rem" }}>
                <VerifiedUserIcon
                  style={{ fontSize: "50px", marginTop: "-100px" }}
                />
                <p>
                Quality
                  <br />
                  Assurance
                </p>
              </div>
              <div className="col col-2" style={{ overflow: "hidden",marginBlock:"3rem" }}>
                <KeyIcon
                  style={{ fontSize: "50px", marginTop: "-100px" }}
                />
                <p>
                Cyber
                  <br />
                  Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{color:" rgb(248, 84, 117)",height:"1px", boxShadow:"0 -20px 20px 10px  rgb(248, 84, 117)",marginBottom:"0"}}/>
    </>
  );
}

export default ProvideServices;
