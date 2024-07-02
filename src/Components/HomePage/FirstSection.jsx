import React from "react";
import "./HomePage.css";

function FirstSection() {
  return (
    <>
      <div className="container-fluid home-first-section ">
        <div className="row d-flex">
          <div className="col col-2">
            <img src="Media/logo.png" alt="logo" />
          </div>
          <div className="col ">
            <h1>RexGalaxy Technology</h1>
          </div>
        </div>
      </div>

      <div className="first-section-upper-slide">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-lg-3 left-image">
                  <img
                    id="first-slide-upper-image"
                    src="Media/slide01LeftImage.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>Custom Software Development</h1>At its core,
                    personalized web development is all about customization.
                    It's about going beyond templates and pre-packaged solutions
                    to create a digital space that resonates with you or your
                    business. Here's why it matters
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/service-android.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>Android App Development</h1>From concept to deployment,
                    we handle the entire Android app development process,
                    creating robust and scalable solutions.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/slide03LeftImage.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>UI/UX Design</h1>Our designers create visually appealing
                    and user-friendly interfaces that make a lasting impression
                    on users.
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/slide04LeftImage.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>Cross-Platform Compatibility</h1> We ensure your app works seamlessly across various Android devices and versions.
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/slide05LeftImage.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>Security</h1>We prioritize the security of your app and users, implementing robust measures to protect sensitive data.
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/slide06LeftImage.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>Game Development</h1>Our specialized game development services bring immersive and entertaining gaming experiences to life on the Android platform.
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/slide07LeftImage.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>AR/VR App Development</h1>Explore the possibilities of augmented reality (AR) and virtual reality (VR) with our innovative app development services.
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/slide08LeftImage.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>IOT Integration</h1>Connect your app with IoT devices to enable remote control and monitoring, opening new opportunities for your business.
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="5000">
              <div id="first-section-slides-row" className="row d-flex">
                <div className="col col-3 left-image">
                  <img
                    src="Media/slide09LeftImage.png"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="col col-7">
                  <p>
                    <h1>E-commerce Solutions</h1>We create feature-rich e-commerce apps that drive sales and enhance user shopping experiences.
                  </p>
                </div>
              </div>
            </div>

            
          </div>


          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <button id="slide-previous-btn">Previous</button>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <button id="slide-next-btn">Next</button>
          </button>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
