import React,{useState} from 'react';
import './Footer.css';

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const baseUrl = "https://rexgalaxyfullstackmail.onrender.com";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      fullName: fullName,
      message: message,
      phone:phone
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
 



  return (
    <>
    <div className="container-fluid footer">
      <div className="row top-row">
        <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/logo.png" alt="" />
      </div>
      <hr/>
      <div className="row middle-row">
        <div className="col left-col">
          <form id='email'>
            <label>Name</label>
            <br />
            <input title='Enter your full name here' type="text" name='Name'   required autoComplete='off' onChange={(e)=>setFullName(e.target.value)} />
            <br />
           <div className="row">
            <div className="col email">
            <label >Email</label><br />
            <input type="email" name="email"  required autoComplete='off' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="col mobile">
            <label >Phone Number</label><br />
            <input type="tel" name="Phone" maxLength={12} minLength={10} required autoComplete='off' onChange={(e)=>setPhone(e.target.value)}/>
            </div>
           </div>
           <label>Message</label><br />
           <textarea name="Message"  cols="60" required rows="8" onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button  onClick={()=>sendEmail()} >Submit</button>
          </form>
        </div>
        <div className="col right-col">
          <div className="row heading">
            Contact Us
          </div>
          <div className="row text">
            "Feel the joy of connection - reach out to us through our 'Contact Us' portal, where inquiries become conversations and your satisfaction is our delight."
          </div>
          <div className="row mobile">
            <div className="col col-2">
            <LocalPhoneRoundedIcon/>
            </div>
            <div className="col col-10">
              +91 74112 11148
            </div>
          </div>
          <div className="row email">
          <div className="col col-2">
            <LocalPostOfficeRoundedIcon/>
            </div>
            <div className="col col-10">
            contact@rexgalaxy.com
            </div>
          </div>
          <div className="row address">
          <div className="col col-2">
            <PlaceRoundedIcon/>
            </div>
            <div className="col col-10">
            A 40, Ithum Tower A,
6th Floor, 606,
Noida Sector 62 , Uttar Pradesh,201301
            </div>
          </div>
          <div className="row social-links">
            <div className="col">
            <NavLink to='https://www.facebook.com/profile.php?id=100094083617995&mibextid=ZbWKwL' target='blank'><FacebookRoundedIcon style={{fontSize:"40px"}}/></NavLink>
            </div>
            <div className="col">
              <NavLink to='https://x.com/Rexgalaxy_?s=20' target='blank'><TwitterIcon style={{fontSize:"40px"}}/></NavLink>
            </div>
            <div className="col">
            <NavLink><YouTubeIcon style={{fontSize:"40px",color:"red"}}/></NavLink>
            </div>
            <div className="col">
              <NavLink to="https://www.linkedin.com/company/rexgalaxy-technology/mycompany/verification/" target='blank'><LinkedInIcon style={{fontSize:"40px"}}/></NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row bottom-row">
        <p>© Copyright <strong>RexGalaxy Technology</strong>. All Rights Reserved</p>
      </div>
    </div>
    </>
  )
}

export default Footer
