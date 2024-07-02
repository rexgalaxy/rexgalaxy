import React, { useState } from 'react';
import './NavbarMenus.css';
import { NavLink } from 'react-router-dom';


function HireDeveloper() {
  const [status,setStatus]=useState(true)
  function hide(){
    setStatus(!status)
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
}
  return (
    <>
  {status?
       <div className="hireDeveloper container-fluid" onMouseLeave={hide}>
       {/* <div className="row closebtn-row d-flex">
         <div className="closebtn" onClick={hide}>Close X</div>
       </div> */}
       <div className="row heading-row "><div className="col heading">Hire Developer</div>
       Assemble your dream tech team with our IT company's expert developers, combining skill, innovation, and dedication to turn your projects into success stories.</div>
       <div className="row menu">
       <div className="col column-1">
       <ul>
         <li><NavLink className="link" to='/hire-android-developer'>&gt; &nbsp; Hire Android Developer</NavLink></li>
         <li><NavLink className="link" to='/hire-codeIgniter-developer' > &gt; &nbsp; Hire Codelgniter Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-flutter-developer"> &gt; &nbsp; Hire Flutter Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-java-developer" > &gt; &nbsp; Hire Java Developer</NavLink></li>
         {/* <li><NavLink className="link" to="/hire-react-developer"> &gt; &nbsp; Hire React Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-web-developer" > &gt; &nbsp; Hire Web Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-wordPress-developer"> &gt; &nbsp; Hire WordPress Developer</NavLink></li> */}
       </ul>
     </div>
     <div className=" col column-2">
       <ul>
         <li><NavLink className="link" to="/hire-blockchain-developer"> &gt; &nbsp; Hire Blockchain Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-content-writer"> &gt; &nbsp; Hire Content Writer</NavLink></li>
         <li><NavLink className="link" to="/hire-frontend-developer"> &gt; &nbsp; Hire Frontend Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-laravel-developer"> &gt; &nbsp; Hire Laravel Developer</NavLink></li>
         {/* <li><NavLink className="link" to="/hire-seo-expert"> &gt; &nbsp; Hire SEO Expert</NavLink></li>
         <li><NavLink className="link" to="/hire-video-editors"> &gt; &nbsp; Hire Video Editor</NavLink></li>
         <li><NavLink className="link" to="/hire-webflow-developer"> &gt; &nbsp; Hire Webflow Developer</NavLink></li> */}
       </ul>
     </div>
     <div className="col column-3">
       <ul>
         <li><NavLink className="link" to="/hire-cakephp-developer"> &gt; &nbsp; Hire CakePHP Developer </NavLink></li>
         <li><NavLink className="link" to="/hire-digital-marketing-expert"> &gt; &nbsp; Hire Digital Marketing Expert</NavLink></li>
         <li><NavLink className="link" to="/hire-ios-developer"> &gt; &nbsp; Hire IOS Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-magento-developer"> &gt; &nbsp; Hire Magento Developer</NavLink></li>
         {/* <li><NavLink className="link" to="/hire-shopify-developer"> &gt; &nbsp; Hire Shopify Developer</NavLink></li>
         <li><NavLink className="link" to="/hire-web-designer"> &gt; &nbsp; Hire Web Designer</NavLink></li>
         <li><NavLink className="link" to="/hire-woo-commerce-developer"> &gt; &nbsp; Hire Woo-Commerce Developer</NavLink></li> */}
       </ul>
     </div>
       </div>
       <div className="row heading-row" style={{marginTop:"-50px"}}>
          <NavLink to='/hire-developers' id='know-more-btn' className="btn-row" onClick={scrollToTop()}>
        Know More
       </NavLink>
        </div>
      </div>
  :null}
    {/* <div className="hireDeveloper">
        <div className="heading">Hire Developer</div>
    <div className='menu'>
    <div className="column-1">
      <ul>
        <li>&gt; &nbsp; Hire Android Developer</li>
        <li>&gt; &nbsp; Hire Codelgniter Developer</li>
        <li>&gt; &nbsp; Hire Flutter Developer</li>
        <li>&gt; &nbsp; Hire Java Developer</li>
        <li>&gt; &nbsp; Hire React Developer</li>
        <li>&gt; &nbsp; Hire Social Media Manager</li>
        <li>&gt; &nbsp; Hire Web Developer</li>
        <li>&gt; &nbsp; Hire WordPress Developer</li>
      </ul>
    </div>
    <div className="column-2">
      <ul>
        <li>&gt; &nbsp; Hire Blockchain Developer</li>
        <li>&gt; &nbsp; Hire Content Writer</li>
        <li>&gt; &nbsp; Hire Frontend Developer</li>
        <li>&gt; &nbsp; Hire Laravel Developer</li>
        <li>&gt; &nbsp; Hire SEO Expert</li>
        <li>&gt; &nbsp; Hire Video Editor</li>
        <li>&gt; &nbsp; Hire Webflow Developer</li>
      </ul>
    </div>
    <div className="column-3">
      <ul>
        <li>&gt; &nbsp; Hire CakePHP Developer </li>
        <li>&gt; &nbsp; Hire Digital Marketing Expert</li>
        <li>&gt; &nbsp; Hire IOS Developer</li>
        <li>&gt; &nbsp; Hire Magento Developer</li>
        <li>&gt; &nbsp; Hire Shopify Developer</li>
        <li>&gt; &nbsp; Hire Web Designer</li>
        <li>&gt; &nbsp; Hire Woo-Commerce Developer</li>
      </ul>
    </div>
    
  </div>
 
    </div>

   */}
    </>
  )
}

export default HireDeveloper
