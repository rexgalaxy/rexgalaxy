import React,{useState,useEffect} from "react";
import "./HireDeveloper.css";

const HireDeveloperIndividual = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [fullName,setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [technology, setTechnology] = useState("");

  const baseUrl = "https://rexgalaxyfullstackmail.onrender.com";

  const sendHireDeveloperEmail = async () => {
    let dataSend = {
      fullName: fullName,
      email: email,
      phone:phone,
      technology:technology,
    };

    const res = await fetch(`${baseUrl}/email/sendHireDeveloperEmail`, {
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
    <div>
      <>
        <div className="container-fluid hire-developer-page d-flex flex-column">
          <div className="row main-heading">
            <div className="col">Hire Top-Notch <br /> {props.hire}</div>
            <div className="background-design-red" >&nbsp;</div>
            <div className="background-design-blue" >&nbsp;</div>
          </div>
          <div className="row top-heading-row ">
            <div className="col heading">
              Why Opt for RexGalaxy in Your Quest to Hire 
              {props.hire}?
            </div>
            <div className="col text">
              RexGalaxy stands out as the ideal choice for hiring {props.hire} due to its commitment to excellence and a pool of
              seasoned professionals. Our platform ensures a seamless hiring
              process, enabling you to access top-tier talent with proven
              expertise in {props.service}. We prioritize skill, innovation,
              and reliability, fostering an environment where developers thrive.
              With a meticulous screening process, RexGalaxy ensures you acquire
              not just developers but strategic partners in your projects. Our
              commitment to client satisfaction and delivering exceptional
              results sets RexGalaxy apart, making it the preferred destination
              for those seeking the best-in-class {props.hire} for their
              endeavors.
       
            </div>
          </div>
          <div className="row d-flex form-row">
            <div className="col text-col" >
              <h2>We can facilitate the growth of your business!</h2>
              RexGalaxy, an avant-garde IT ally, is dedicated to cultivating the
              growth of your business. Our adept team specializes in delivering
              cutting-edge IT solutions, offering bespoke strategies and
              innovative technologies that propel your company forward in the
              digital age. <br />
              <br /> As your trusted partner, we ensure not only immediate
              growth but sustained success in the dynamic landscape of
              information technology. Harnessing the power of technology, we
              elevate your operations and steer your business towards thriving
              achievements. <br />
              <br /> RexGalaxy goes beyond conventional solutions, providing
              strategic insights, personalized approaches, and unwavering
              commitment. Our goal is to not only meet but exceed your
              expectations, creating a synergy that transforms challenges into
              opportunities. With RexGalaxy as your guiding force, anticipate a
              journey of innovation, adaptability, and unparalleled growth as we
              navigate the intricate realms of modern IT togethe
            </div>
            <div className="col form-col" >
              <div className="form-background-design-red">
                &nbsp;
              </div>
              <div className="form-background-design-blue">
                &nbsp;
              </div>
              <h3>Secure your free quote now</h3>
              <form id="email">
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Your Name"
                  autoComplete="off"
                  required
                  onChange={(e)=>setFullName(e.target.value)}
                />
                <input
                  name="Mobile Number"
                  type="tel"
                  maxLength={12}
                  minLength={10}
                  placeholder=" Your mobile number "
                  autoComplete="off"
                  required
                  onChange={(e)=>setPhone(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="Email"
                  autoComplete="off"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <select name="Service" id="" required onChange={(e)=>setTechnology(e.target.value)}>
                  <option >Android Development</option>
                  <option>IOS Development</option>
                  <option>Flutter Development</option>
                  <option>Game Development</option>
                  <option>Website Development</option>
                  <option>E-commerce Development</option>
                  <option>other</option>
                </select>
                <input id="submit-btn" type="submit" onClick={()=>sendHireDeveloperEmail()} />
              </form>
            </div>
          </div>
          <div className="row explore-service-row d-flex flex-column">
            <div className="col text-col" >
              <h2>Discover Our {props.service} Services for Hire</h2>
              Explore RexGalaxy's {props.service} Services for hire,
              designed to elevate your projects. With seasoned professionals and
              cutting-edge solutions, we tailor our expertise to meet your
              business needs. Choose RexGalaxy for seamless and efficient
              hiring, propelling your IT initiatives to new heights with our
              dedicated {props.service} services
            </div>
            <div className="col services-time-col" >
              <div className="row d-flex">
                <div className="col full-time">
                  <h4>Full-Time</h4>
                  <hr />
                  Recruit full-time IT developer to enhance project efficiency and innovation.
                  <div className="explore-btn">Expore now</div>
                  <div className="background-design">&nbsp;</div>
                </div>
                <div className="col part-time">
                  <h4>Part-Time</h4>
                  <hr />
                  Seek part-time IT developer to contribute expertise flexibly and efficiently.
                  <div className="explore-btn">Expore now</div>
                  <div className="background-design">&nbsp;</div>
                </div>
                <div className="col hourly-basis">
                  <h4>Hourly Basis</h4>
                  <hr />
                  Engage IT developer hourly for flexible, project-specific contributions and expertise.
                  <div className="explore-btn">Expore now</div>
                  <div className="background-design">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HireDeveloperIndividual;
