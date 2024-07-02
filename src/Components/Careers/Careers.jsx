import React,{useState,useEffect} from "react";
import "./Careers.css";
import Carousel from "react-bootstrap/Carousel";
// import Aos from "aos";

const Careers = () => {

  // useEffect(()=>{
  //   Aos.init({duration:1000,offset:200})
  // })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const baseUrl = "https://rexgalaxyfullstackmail.onrender.com";

  const sendCareerEmail = async () => {
    let dataSend = {
      firstName:firstName,
      lastName:lastName,
      email: email,
      phone:phone,
      course: course
    };

    const res = await fetch(`${baseUrl}/email/sendCareerEmail`, {
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
      <Carousel controls={false} indicators={false} pause={"hover" | false}>
        <div className="container-fluid careers-page">
          <div className="row first-row">
            <div className="col">
              <h1>We are inviting Interns, Start your career with RexGalaxy</h1>
              "Unlock your potential with an internship at our cutting-edge IT
              company! Join us to gain hands-on experience, work on innovative
              projects, and be part of a dynamic tech team. Apply now!"
              <p >Join us</p>
            </div>
            <div className="col">
              
            </div>
          </div>
          <div className="row second-row">
            <div className="col">
              <div className="row heading-row">
                Explore Your Potential with RexGalaxy Internship Program!
              </div>
        
              <div className="row heading-text-row">
                Unlock a world of opportunities by joining our dynamic IT team
                through our exclusive internship program. As a forward-thinking
                company, we are on the lookout for passionate individuals eager
                to learn and contribute to cutting-edge projects.
              </div>
            
              
              <div className="row content-row">
                <div className="col left-col">
                  What <br /> We <br /> Offer
                </div>
                <div className="col right-col">
                  <Carousel
                    controls={false}
                    indicators={false}
                    pause={"hover" | false}
                  >
                    <Carousel.Item interval={2000}>
                      <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/handson-exp.png" alt="" />
                      <br />
                      Hands-on experience in diverse IT domains
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                      <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/industry-experts.png" alt="" />
                      <br />
                      Mentorship from industry experts
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                      <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/real-world-projects.png" alt="" />
                      <br />
                      Real-world projects and challenges
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                      <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/networking-opportunities.png" alt="" />
                      <br />
                      Job opportunities
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                      <img src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/certification.png" alt="" />
                      <br />
                      Certification on completion
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="row third-row">
            <div className="col">
              
              <form id="email">
              <h2>Start Your Career Now</h2>
            
                <input type="text" required name="First Name" placeholder="first name" autoComplete="off" onChange={(e)=>setFirstName(e.target.value)} />
                <input type="text" required name="Last Name" placeholder="last name" autoComplete="off" onChange={(e)=>setLastName(e.target.value)} />
                <input type="email" name="Email" required placeholder="email address" autoComplete="off" onChange={(e)=>setEmail(e.target.value)} />
                <input type="tel" maxLength={12} minLength={10} name="Mobile Number"
                required placeholder="mobile or phone"
                autoComplete="off" onChange={(e)=>setPhone(e.target.value)} />
               <select name="Course" autoComplete="off" placeholder="Select Internship Program" required onChange={(e)=>setCourse(e.target.value)}>
                  <option>Front-End</option>
                  <option>Back-End</option>
                  <option>React Js</option>
                  <option>Python</option>
                  <option>Flutter</option>
                  <option>MERN</option>
                  <option>MEAN</option>
                  <option>React Native</option>
                  <option>Web Designing</option>
                  <option>Other</option>
                </select>
                <input type="submit" value="SUBMIT" className="submit-btn" onClick={()=>sendCareerEmail()}/>
              </form>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Careers;
// import React, { useState } from "react";
// import "./Careers.css";
// import Carousel from "react-bootstrap/Carousel";

// const Careers = () => {

//   const submitHandler=(e)=>{
//     e.preventDefault();
//     Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "username",
//       Password : "password",
//       To : 'dubeyaman12092000@gmail.com',
//       From : "you@isp.com",
//       Subject : "This is the subject",
//       Body : "And this is the body"
//   }).then(
//     message => alert(message)
//   );
//   }
 
//   return (
//     <>
//       <Carousel controls={false} indicators={false} pause={"hover" | false}>
//         <div className="container-fluid careers-page">
//           <div className="row first-row">
//             <div className="col">
//               <h1>We are inviting Interns, Start your career with RexGalaxy</h1>
//               "Unlock your potential with an internship at our cutting-edge IT
//               company! Join us to gain hands-on experience, work on innovative
//               projects, and be part of a dynamic tech team. Apply now!"
//               <button>Join us</button>
//             </div>
//             <div className="col">
              
//             </div>
//           </div>
//           <div className="row second-row">
//             <div className="col">
//               <div className="row heading-row">
//                 Explore Your Potential with RexGalaxy Internship Program!
//               </div>
        
//               <div className="row heading-text-row">
//                 Unlock a world of opportunities by joining our dynamic IT team
//                 through our exclusive internship program. As a forward-thinking
//                 company, we are on the lookout for passionate individuals eager
//                 to learn and contribute to cutting-edge projects.
//               </div>
            
              
//               <div className="row content-row">
//                 <div className="col left-col">
//                   What <br /> We <br /> Offer
//                 </div>
//                 <div className="col right-col">
//                   <Carousel
//                     controls={false}
//                     indicators={false}
//                     pause={"hover" | false}
//                   >
//                     <Carousel.Item interval={2000}>
//                       <img src="Media/handson-exp.png" alt="" />
//                       <br />
//                       Hands-on experience in diverse IT domains
//                     </Carousel.Item>
//                     <Carousel.Item interval={1500}>
//                       <img src="Media/industry-experts.png" alt="" />
//                       <br />
//                       Mentorship from industry experts
//                     </Carousel.Item>
//                     <Carousel.Item interval={2000}>
//                       <img src="Media/real-world-projects.png" alt="" />
//                       <br />
//                       Real-world projects and challenges
//                     </Carousel.Item>
//                     <Carousel.Item interval={2000}>
//                       <img src="Media/networking-opportunities.png" alt="" />
//                       <br />
//                       Job opportunities
//                     </Carousel.Item>
//                     <Carousel.Item interval={2000}>
//                       <img src="Media/certification.png" alt="" />
//                       <br />
//                       Certification on completion
//                     </Carousel.Item>
//                   </Carousel>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row third-row">
//             <div className="col">
              
//               <form action=""method="POST" >
//               <h2>Start Your Career Now</h2>
            
//                 <input  type="text" required name="name" placeholder="first name" autoComplete="off" />
//                 <input   type="text" required name="Last Name" placeholder="last name" autoComplete="off" />
//                 <input   type="email" name="email" required placeholder="email address" autoComplete="off" />
//                 <input   type="number" name="Mobile Number"
//                  required placeholder="mobile or phone"
//                 autoComplete="off" /> 
//                <select   name="Course" autoComplete="off" placeholder="Select Internship Program">
//                   <option>Front-End</option>
//                   <option>Back-End</option>
//                   <option>React Js</option>
//                   <option>Python</option>
//                   <option>Flutter</option>
//                   <option>MERN</option>
//                   <option>MEAN</option>
//                   <option>React Native</option>
//                   <option>Web Designing</option>
//                   <option>Other</option>
//                 </select>
//                 <input type="submit" value="SUBMIT" className="submit-btn" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </Carousel>
//     </>
//   );
// };

// export default Careers;


// import React, { useState } from 'react';

// const Careers = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     alert("hello");

//     try {
//       const response = await fetch('http://localhost:3001/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Form submitted successfully');
//         // Optionally, reset the form
//         setFormData({
//           name: '',
//           email: '',
//           message: '',
//         });
//       } else {
//         console.error('Failed to submit form');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{marginTop:"100px"}}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Message:
//         <textarea name="message" value={formData.message} onChange={handleChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Careers;
