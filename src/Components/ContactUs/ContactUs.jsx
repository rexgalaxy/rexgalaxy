import React, {useState,useEffect } from 'react';
import './ContactUs.css';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';




const ContactUs = () => {
  // React.useEffect(() => {
   

  //   return () => {
  //     isCancelled.current = true;
  //   };
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

     <div className="container-fluid contactUs-page">
        <div className="row main-heading" >
            <div className="col">Contact Us</div>
            <hr  style={{color:"white",height:"10px",marginTop:"10px"}}/>
        </div>

        <div className="row heading-para">
            <div className="col">Feel free to customize this content to match your brand's unique voice and values. Additionally, include relevant contact information and any other details that are essential for your website visitors.</div>
        </div>
        {/* <form action='https://formspree.io/f/xoqganyw' method='POST' className="row  contact-form">
            Fill this contact form
            <hr style={{color:"white",marginBlock:"20px"}}/>
           <input className='col' type="text" placeholder='Full Name' name='Full Name' required autoComplete='off' />
           <input className='col' type="email" placeholder='E-mail' name='E-mail' required autoComplete='off' />
           <input className='col' type="number" placeholder='Mobile or Phone' name='Mobile Number' required autoComplete='off' maxLength={10} />
           <textarea className='col' name="Message"  cols="15" rows="10" required autoComplete='off' placeholder='Enter your message here....'></textarea>
           <button type='submit' className='col'>Submit</button>
        </form> */}



<Form id='email' className="row  contact-form">
            Fill this contact form
            <hr style={{color:"white",marginBlock:"20px"}}/>
           <Form.Group>
           <Form.Control className='col' type="text" placeholder='Full Name' name='Full Name' required autoComplete='off'
           value={fullName} onChange={(e)=>setFullName(e.target.value)} />
           <Form.Control className='col' type="email" placeholder='E-mail'value={email} name='E-mail' required autoComplete='off' onChange={(e)=>setEmail(e.target.value)} />
           <Form.Control className='col' type="tel" maxLength={12} minLength={10}  placeholder='Mobile or Phone' value={phone} name='Mobile Number' required autoComplete='off' maxLength={10} onChange={(e)=>setPhone(e.target.value)} />
           <textarea className='col' name="Message"  cols="15" rows="10" required autoComplete='off' placeholder='Enter your message here....' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
           </Form.Group>
           <button type='submit' className='col' onClick={()=>sendEmail()}>Submit</button>
        </Form>


        <div className="row map-section">
            <div className="col">
            <iframe title='amp'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0828742360836!2d77.36992837429331!3d28.627278184321387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce506a25025d3%3A0xdcfea1184d800e5e!2sRexGalaxy%20Technology!5e0!3m2!1sen!2sin!4v1703143733548!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

      {/* <ContactForm/> */}
     </div>
    </>
  )
}

export default ContactUs
