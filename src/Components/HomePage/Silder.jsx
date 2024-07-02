import React from "react";
import "./HomePage.css";

function Silder() {
  return (
    <>
      <div className="homepage-slider" >
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div id="slide1" className="carousel-item active">
              <div className="slide1">
                <div className="container-fluid slide-heading">
                  <div className="row d-flex flex-row">
                    <div className=" col col-6">
                      <section>
<img src="./Media/Slide1LeftImage.svg" 
alt="img" />
                      </section>
                    </div>
                    <div className="col col-6">
                      <p className="home-slide-description">Professional Custom Software Development Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="slide2" className="carousel-item">
              <div className="slide2">
                <div className="container-fluid slide-heading">
                  <div className="row d-flex flex-row">

                    <div className=" col col-6">
                    <section>
<img src="./Media/Slide2LeftImage.svg" alt="img" />
                      </section>
                    </div>
                    <div className="col col-6">
                      <p>Grow your business with RexGalaxy Technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="slide3" className="carousel-item">
              <div className="slide3">
                <div className="container-fluid slide-heading">
                  <div className="row d-flex flex-row">
                    <div className="col col-6">
                      <p>Grow your business with RexGalaxy Technology</p>
                    </div>
                    <div className=" col col-6">
                      <p>Professional Custom Software Development Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="slide4" className="carousel-item">
              <div className="slide4">
              <div className="container-fluid slide-heading">
                  <div className="row d-flex flex-row">
                    <div className="col col-6">
                      <p>Grow your business with RexGalaxy Technology</p>
                    </div>
                    <div className=" col col-6">
                      <p>Professional Custom Software Development Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span>Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span>Next</span>
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Silder;
