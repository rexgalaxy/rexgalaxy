import React, { useState } from 'react';
import './RightSideMenu.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';

function RightSideMenu(props) {
  const[status,setStatus]=useState(props.menu);

  // function hideMenu(){
  //   setStatus(false);
  // }
  function hideMenu(){
    setStatus(!status);
  }

  return (
    <>
{status?<div  className="right-side-menu" >
    <div className="row d-flex close-btn-row">
        <div onClick={hideMenu} className="col col-6 close-btn">CLOSE X</div>
    </div>
    <div className="row d-flex logo-row">
        <div className="col logo"><img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/logo.png" alt="logo" /></div>
    </div>
    <div className="row d-flex menu-options-row flex-column">
        <NavLink onClick={hideMenu} to='/who-we-are' style={{textDecoration:"none",color:"white"}} className="col d-lg-none d-lock">Who We Are</NavLink>
        <NavLink onClick={hideMenu} to='/our-vision' style={{textDecoration:"none",color:"white"}} className="col d-lg-none d-lock">Our vision</NavLink>
        <NavLink onClick={hideMenu} to='/services' style={{textDecoration:"none",color:"white"}} className="col d-lg-none d-lock">Services</NavLink>
        <NavLink onClick={hideMenu} to='/hire-developers' className="col d-lg-none d-lock">Hire Developers</NavLink>
        {/* <NavLink to='/industry' className="col d-lg-none d-lock">Industry</NavLink> */}
        {/* <NavLink to='/products' className="col d-xl-none d-lock">Products</NavLink> */}
        {/* <NavLink to='/blog' className="col d-xl-none d-lock">Blog</NavLink> */}
        {/* <NavLink to='/our-brand' className="col">Our Brand</NavLink> */}
        <NavLink onClick={hideMenu} to='/contactUs' className="col">Contact Us</NavLink>
        <NavLink onClick={hideMenu} to='/contactUs' className="col">Support</NavLink>

        {/* <NavLink to='/investors' className="col">Investors</NavLink> */}
        {/* <NavLink to='/branches' className="col">Branches</NavLink> */}
        {/* <NavLink to='/developers' className="col">Developers</NavLink> */}
        {/* <NavLink to='updates' className="col">Updates</NavLink> */}
        <NavLink onClick={hideMenu} to='/careers' className="col d-xl-none d-block">Careers</NavLink>
    </div>

    <div className="row d-flex social-links">
        <NavLink onClick={hideMenu} to='https://www.facebook.com/profile.php?id=100094083617995&mibextid=ZbWKwL' className="col"><FacebookIcon style={{fontSize:"30px",color:"white"}}/></NavLink>
        <NavLink onClick={hideMenu} to='https://x.com/Rexgalaxy_?s=20' className="col"><TwitterIcon style={{fontSize:"30px",color:"white"}}/></NavLink>
        <NavLink onClick={hideMenu} to="https://www.linkedin.com/company/rexgalaxy-technology/mycompany/verification/" className="col"><LinkedInIcon style={{fontSize:"30px",color:"white"}}/></NavLink>
        <NavLink onClick={hideMenu} className="col"><YouTubeIcon style={{fontSize:"30px",color:"white"}}/></NavLink>
        <NavLink onClick={hideMenu} className="col"><InstagramIcon style={{fontSize:"30px",color:"white"}}/></NavLink>
    </div>
        
        
     </div>:null
    }
    </>
  )
}

export default RightSideMenu
