import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Services from "../NavbarMenus/Services";
import HireDeveloper from "../NavbarMenus/HireDeveloper";
import Industry from "../NavbarMenus/Industry";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
import { NavLink } from "react-router-dom";
import WhoWeAre from "../NavbarMenus/WhoWeAre";
import OurVision from "../NavbarMenus/OurVision";
import Careers from "../NavbarMenus/Careers";





function Navbar() {
  const [whoWeAreStatus,setWhoWeAreStatus] = useState(false);
  const [ourVisionStatus,setOurVisionStatus] = useState(false);
  const [careersStatus,setCareersStatus] = useState(false);
const [servicesStatus,setServicesStatus] = useState(false);
const [hireDeveloperStatus,setHireDeveloperStatus] =useState(false);
const [industryStatus,setIndustryStatus] =useState(false);
const [navBackground,setNavBackground]=useState(false);

 const [rightSideMenu, setRightSideMenu] = useState(false);
 function showRightSideMenu(){
       setRightSideMenu(!rightSideMenu);
  }

  const changeBackgroundColor=()=>{
   if(window.scrollY>=100){
    setNavBackground(true);
   }
   else{
    setNavBackground(false);
   }
  }

  window.addEventListener('scroll',changeBackgroundColor);

  return (
    <>
      <div className={navBackground?"navbars nav-active":"navbars"}>
        <div className="nav-left-section">
          <NavLink to="/" className="logo  ">
            <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/logo.png" alt="logo" />
          </NavLink>
         
        </div>
        <div className="nav-middle-section">

        <NavLink
          onMouseEnter={()=>setWhoWeAreStatus(true)}
          onMouseLeave={()=>setWhoWeAreStatus(false)}
          onClick={()=>setWhoWeAreStatus(false)}
            style={{ textDecoration: "none", color: "white" }}
            to="/who-we-are"
            className="nav-menu-items service-optionmn d-none d-lg-block"
          >
            <ArrowDropDownIcon  style={{ color: "red" }} />
            Who We Are

            {whoWeAreStatus && <div className="dropdown_menu_ms">
            <WhoWeAre/>
            </div>}

          </NavLink>
          <NavLink
          onMouseEnter={()=>setOurVisionStatus(true)}
          onMouseLeave={()=>setOurVisionStatus(false)}
          onClick={()=>setOurVisionStatus(false)}
            style={{ textDecoration: "none", color: "white" }}
            to="/our-vision"
            className="nav-menu-items service-optionmn d-none d-lg-block"
          >
            <ArrowDropDownIcon  style={{ color: "red" }} />
            Our vision

            {ourVisionStatus && <div className="dropdown_menu_ms">
            <OurVision/>
            </div>}

          </NavLink>

          <NavLink
          onMouseEnter={()=>setServicesStatus(true)}
          onMouseLeave={()=>setServicesStatus(false)}
          onClick={()=>setServicesStatus(false)}
            style={{ textDecoration: "none", color: "white" }}
            to="/services"
            className="nav-menu-items service-optionmn d-none d-lg-block"
          >
            <ArrowDropDownIcon  style={{ color: "red" }} />
            Services

            {servicesStatus && <div className="dropdown_menu_ms">
            <Services/>
            </div>}

          </NavLink>
          <NavLink 
                      onMouseEnter={()=>setHireDeveloperStatus(true)}
                      onMouseLeave={()=>setHireDeveloperStatus(false)}
                      onClick={()=>setHireDeveloperStatus(false)}
            className="nav-menu-items d-none d-lg-block"
            to='/hire-developers'
          >
            <ArrowDropDownIcon style={{ color: "red" }} />
            Hire Developer
            {hireDeveloperStatus && <div className="dropdown_menu_ms">
            <HireDeveloper/>
            </div>}
          </NavLink>
          <div
           onMouseEnter={()=>setIndustryStatus(true)}
           onMouseLeave={()=>setIndustryStatus(false)}
            className="nav-menu-items d-none d-xl-block "
          >
            <ArrowDropDownIcon style={{ color: "red" }} />
            Industry
            {industryStatus && <div className="dropdown_menu_ms">
            <Industry/>
            </div>}
          </div>
          <NavLink
           onMouseEnter={()=>setCareersStatus(true)}
           onMouseLeave={()=>setCareersStatus(false)}
           onClick={()=>setCareersStatus(false)}
          to="/careers" className="nav-menu-items d-none d-xl-block">
            <ArrowDropDownIcon style={{ color: "red" }} />
            Careers
            {careersStatus && <div className="dropdown_menu_ms">
            <Careers/>
            </div>}
          </NavLink>
          
        </div>
        <div className="nav-right-section">
          {/* <div className="search-button">
            <SearchIcon />
          </div> */}
          <div 
           onClick={showRightSideMenu} className="menu-button mx-3">
            <MenuIcon />
          </div>
          <div className="right-logo d-none">
            <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/logo.png" alt="logo" />

          </div>
        </div>
      </div>
   {
    rightSideMenu?<RightSideMenu menu ={rightSideMenu} />:null
    
   }
     
    </>
  );
}

export default Navbar;
