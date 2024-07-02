import React from "react";
import "./NavbarMenus.css";
import { NavLink } from "react-router-dom";


function Services() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
}
  return (
    <>
      <div className="hireDeveloper container-fluid">
        <div className="row heading-row">
          <div className="col heading">Services</div>
          Driving digital success, our IT company delivers top-notch services
          spanning software development, cloud solutions, cybersecurity, IT
          consulting, and infrastructure management, catalyzing transformative
          growth for businesses
        </div>
        <div className="row menu">
          <div className="col column-1">
            <ul>
              <li><NavLink className="link" to="/services/seo"> &gt; &nbsp; Best SEO Services</NavLink></li>
              <li><NavLink className="link" to="/services/e-commerceApp"> &gt; &nbsp; E-Commerce App Development</NavLink></li>
              {/* <li><NavLink className="link" to=""> &gt; &nbsp; Custom Website Development</NavLink></li> */}
              <li><NavLink className="link" to="/services/flutterApp"> &gt; &nbsp; Flutter App Development</NavLink></li>
              <li><NavLink className="link" to="/services/school-and-educationalApp"> &gt; &nbsp; School & Educational Software Development</NavLink></li>
            </ul>
          </div>
          <div className=" col column-2">
            <ul>
              <li><NavLink className="link" to="/services/reactApp"> &gt; &nbsp; React Development</NavLink></li>
              <li><NavLink className="link" to="/services/androidApp"> &gt; &nbsp; Android App Development</NavLink></li>
              <li><NavLink className="link" to="/services/e-commerceApp"> &gt; &nbsp; E-Commerce Software Development</NavLink></li>
              <li><NavLink className="link" to="/services/shopifyApp"> &gt; &nbsp; Shopify Applications Development</NavLink></li>
              {/* <li><NavLink className="link" to=""> &gt; &nbsp; Single Page Applications Development</NavLink></li> */}
            </ul>
          </div>
          <div className="col column-3">
            <ul>
              <li><NavLink className="link" to="/services/businessApp"> &gt; &nbsp; Business Website Development</NavLink></li>
              <li><NavLink className="link" to="/services/iosApp"> &gt; &nbsp; IOS App Development</NavLink></li>
              {/* <li><NavLink className="link" to=""> &gt; &nbsp; Content Marketing</NavLink></li> */}
              <li><NavLink className="link" to="/services/health-and-careSoftware"> &gt; &nbsp; Heath-Care Software Development</NavLink></li>
              <li><NavLink className="link" to="/services/wordpressApp"> &gt; &nbsp; WordPress Website Development</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="row heading-row" style={{marginTop:"-50px"}}>
          <NavLink to='/our-vision' id='know-more-btn' className="btn-row" onClick={scrollToTop()}>
        Know More
       </NavLink>
        </div>
    
      </div>
    </>
  );
}

export default Services;
