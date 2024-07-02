import React ,{useState} from 'react';
import './NavbarMenus.css';
import { NavLink } from 'react-router-dom';


function OurVision() {
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
       <div className="hireDeveloper container-fluid" onMouseLeave={hide} >
       {/* <div className="row closebtn-row d-flex">
         <div className="closebtn" >Close X</div>
       </div> */}
       <div className="row heading-row"><div className="col heading">Our Vision</div>
       <hr />
       At Rexglaxy Technology, our commitment to fostering diversity and inclusivity goes beyond the conventional boundaries. We recognize that talent knows no geographical or linguistic confines. Whether you hail from urban hubs or rural landscapes, whether English is a strong suit or an area for growth – we are here to offer equal chances for everyone to flourish in the dynamic world of IT.
       <NavLink to='/our-vision' id='know-more-btn' className="btn-row" onClick={scrollToTop()}>
        Know More
       </NavLink>
       </div>
       {/* <div className="row menu">
       <div className="col column-1">
       <ul>
       <li>&gt; &nbsp; Early Stage Startup</li>
          <li>&gt; &nbsp; Political</li>
          <li>&gt; &nbsp; Logistic & Ditribution</li>
          <li>&gt; &nbsp; Communication Services</li>
          <li>&gt; &nbsp; Directory & Organization</li>
          <li>&gt; &nbsp; Industrial & Manufacturing</li>
          <li>&gt; &nbsp; NGO & Public Services</li>
          <li>&gt; &nbsp; Travel & Hospitality</li>
       </ul>
     </div>
     <div className=" col column-2">
       <ul>
       <li>&gt; &nbsp; Mid Size Business</li>
          <li>&gt; &nbsp; Advertising & Publishing</li>
          <li>&gt; &nbsp; Aviation & Aerospace</li>
          <li>&gt; &nbsp; Gaming & Leisure</li>
          <li>&gt; &nbsp; On-Demand Solutions</li>
       </ul>
     </div>
     <div className="col column-3">
       <ul>
       <li>&gt; &nbsp; Small Size Business</li>
          <li>&gt; &nbsp; Beauty & fashion</li>
          <li>&gt; &nbsp; Hi-Tech</li>
          <li>&gt; &nbsp; Event & Tickets</li>
          <li>&gt; &nbsp; Transport & Automotive</li>
          <li>&gt; &nbsp; Media & Entertainment</li>
          <li>&gt; &nbsp; Real Estate & Property</li>
       </ul>
     </div>
       </div> */}
      </div>
  :null}  

    </>
  )
}

export default OurVision
