import React from "react";
import "./FirstAutoslide.css";
import Carousel from "react-bootstrap/Carousel";


const FirstAutoslide = () => {
  return (
    <div className="container-fluid first-autoslide">
      <div className="text-layer">
        Code Your<br />
        Thoughts
      </div>
      <div className="row">
        <div className="col left-col">
          <div className="first">
            <Carousel controls={false} indicators={false} pause={"hover"|false} fade={true}>
              <Carousel.Item interval={1500} >
                <img className="left-slide-img" src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-left1.png" alt="" />
                
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="left-slide-img" src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-left2.png" alt=""  />
            
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="left-slide-img" src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-left3.png" alt=""  />

              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="col right-col">
          <div className="second">
          <Carousel controls={false} indicators={false} pause={"hover"|false}>
              <Carousel.Item interval={1500} >
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-left3.png" alt="" className="right-col-img"/>
                
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-right-left2.png" alt="" className="right-col-img" />
            
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-right-left3.png" alt="" className="right-col-img"  />

              </Carousel.Item>
            </Carousel>
          </div>
          
          <div className="third">
          <Carousel controls={false} indicators={false} pause={"hover"|false}>
              <Carousel.Item interval={1500} >
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-right-left3.png" alt="" className="right-col-img"/>
                
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-right-right1.png" alt="" className="right-col-img" />
            
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/slide-right-right2.png" alt="" className="right-col-img" />

              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAutoslide;
