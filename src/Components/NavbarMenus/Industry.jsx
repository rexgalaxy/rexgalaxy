import React ,{useState} from 'react';
import './NavbarMenus.css';


function Industry() {
  const [status,setStatus]=useState(true)
  function hide(){
    setStatus(!status)
  }
  return (
    <>

      {status?
       <div className="hireDeveloper container-fluid" onMouseLeave={hide} >
       {/* <div className="row closebtn-row d-flex">
         <div className="closebtn" >Close X</div>
       </div> */}
       <div className="row heading-row"><div className="col heading">Industry</div>
       In the dynamic landscape of the IT industry, our company stands at the forefront, leveraging cutting-edge technologies and strategic innovation to drive digital excellence and meet the evolving needs of businesses in today's rapidly advancing world.</div>
       <div className="row menu">
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
       </div>
      </div>
  :null}  
    {/* <div className="industry">
      <div className="heading">Industry</div>
    <div className='menu'>
      <div className="column-1">
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
      <div className="column-2">
        <ul>
          <li>&gt; &nbsp; Mid Size Business</li>
          <li>&gt; &nbsp; Advertising & Publishing</li>
          <li>&gt; &nbsp; Aviation & Aerospace</li>
          <li>&gt; &nbsp; Gaming & Leisure</li>
          <li>&gt; &nbsp; On-Demand Solutions</li>
        </ul>
      </div>
      <div className="column-3">
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
      
    </div>
 

  
    </div> */}
    </>
  )
}

export default Industry
