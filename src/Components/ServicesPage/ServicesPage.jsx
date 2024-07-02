import React, { useEffect } from 'react';
import './ServicesPage.css'
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


function ServicesPage() {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      return (
     <>
      
       <div className="container-fluid services-page">
         <div className="main-heading row d-flex">
          <h1>Most Popular Services We Provide</h1>
         </div>
         <NavLink to='/services/androidApp' className="row d-flex odd-row" data-aos="fade-up">
            <div   className="col col-2 service-img-col" >
            <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-android.png" alt="react" style={{margin:"0px -3px"}} data-aos="fade-right" />
            </div>
            <div className="col service-about-col" data-aos="fade-left">
                <p className='heading'> &gt; Android Application Development</p>
                <p className='description'>At Android Application Development Solutions, we are your trusted partner on the journey to creating exceptional Android applications that not only meet your business needs but also captivate your target audience. Our dedication to excellence, innovation, and cutting-edge technology ensures that your app stands out in the highly competitive Android marketplace.</p>
            </div>
            </NavLink>


            <NavLink to='/services/iosApp' className="row d-flex even-row " data-aos="fade-up">
            <div className="col service-about-col" data-aos="fade-right">
                <p className='heading'>&gt;iOS Application Development</p>
                <p className='description'>Welcome to our iOS App Building Service, where we turn your innovative ideas into powerful and user-friendly iOS applications. In the rapidly evolving world of mobile technology, having a presence on Apple's iOS platform is crucial to reach a broad and engaged audience. Our expert team of iOS app developers is here to guide you through the entire app development journey, from concept to launch, ensuring that your vision becomes a reality.</p>
            </div>
            <div className="col col-2 service-img-col">
            <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-ios.png" alt="react" style={{margin:"0px -15px"}} data-aos="fade-left"/>
            </div>
            </NavLink>


            {/* <NavLink to='/services/webApp' className="row d-flex odd-row" data-aos="fade-up">
            <div className="col col-2 service-img-col " >
            <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-web-application.png" alt="react" style={{margin:"5px -3px"}} data-aos="fade-right" />
            </div>
            <div className="col service-about-col" data-aos="fade-left">
                <p className='heading'>&gt;Web Application Development</p>
                <p className='description'>At RexGalaxy Technology, we specialize in crafting dynamic web applications that elevate your online presence and drive unparalleled user experiences. Our team of skilled developers combines creativity with cutting-edge technology to bring your vision to life. From responsive design to seamless functionality, we prioritize user-centric solutions that cater to your unique business needs.
.</p>
            </div>
            </NavLink> */}


            <NavLink to='/services/reactApp' className="row d-flex even-row" data-aos="fade-up">
            <div className="col service-about-col" data-aos="fade-right">
                <p className='heading'>&gt;React Single Page Application Development</p>
                <p className='description'>RexGalaxy Technology specializes in creating modern and responsive single-page applications (SPAs) using the power of React. Our development team harnesses the flexibility and efficiency of React to build applications that provide a smooth and interactive user experience.</p>
            </div>
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-react.png" alt="react" style={{margin:"0px -11px"}} data-aos="fade-left" />
            </div>
            </NavLink>


            <NavLink to='/services/seo' className="row d-flex odd-row" data-aos="fade-up">
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-seo.png" alt="react" style={{margin:"-3px -10px"}} data-aos='fade-right'  />
            </div>    
            <div className="col service-about-col" data-aos='fade-left'>
                <p className='heading'>&gt;Best SEO Services </p>
                <p className='description'>In the digital realm, where the rhythm of the internet never slows, mastering the art of Search Engine Optimization (SEO) becomes a symphony of strategic moves, each note crafted to resonate and harmonize with the algorithms of search engines. SEO, much like a musical composition, requires creativity, precision, and a deep understanding of the instruments at play.</p>
            </div>

            </NavLink>


            <NavLink to='/services/flutterApp' className="row d-flex even-row" data-aos='fade-up'>
            <div className="col service-about-col" data-aos='fade-right'>
                <p className='heading'>&gt;Flutter Application Development</p>
                <p className='description'>At Flutter App Innovators, we are the creative force behind some of the most innovative and visually stunning mobile applications powered by Flutter. We pride ourselves on being at the forefront of Flutter app development, pushing the boundaries of what's possible in the mobile app landscape.</p>
            </div>
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-flutter.png" alt="react" style={{margin:"0px -13px"}} data-aos='fade-left' />
            </div>
            </NavLink>


            <NavLink to='/services/wordpressApp' className="row d-flex odd-row" data-aos='fade-up'>
            <div className="col col-2 service-img-col" >
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-wordpress.png" alt="react" style={{margin:"0px -12px"}} data-aos='fade-right' />
            </div>   
            <div className="col service-about-col" data-aos='fade-left'>
                <p className='heading'>&gt;Wordpress Application Development</p>
                <p className='description'>RexGalaxy Technology excels in crafting robust and dynamic applications using the versatile WordPress platform. Our dedicated team leverages the power of WordPress to build customized solutions that align seamlessly with your business goals..</p>
            </div>

            </NavLink>
 

            <NavLink to='/services/e-commerceApp' className="row d-flex even-row" data-aos='fade-up'>
            <div className="col service-about-col" data-aos='fade-right'>
                <p className='heading'>&gt;E-Commerce Application Development</p>
                <p className='description'>In today's digital age, a strong online presence is vital for any business looking to thrive in a competitive market. E-commerce websites have become the cornerstone of modern retail, allowing businesses to reach a global audience and facilitate seamless transactions. To make the most of this digital landscape, you need a professional e-commerce website development service that not only understands your unique needs but also delivers a visually stunning and highly functional online store.</p>
            </div>
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-e-commerce.png" alt="react" style={{margin:"0px -12px"}} data-aos='fade-left' />
            </div>
            </NavLink>


            <NavLink to="/services/shopifyApp" className="row d-flex odd-row" data-aos='fade-up'>
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-shopify.png" alt="react" style={{margin:"0px -12px"}} data-aos='fade-right' />
            </div>    
            <div className="col service-about-col" data-aos='fade-left'>
                <p className='heading'>&gt;Shopify Application Development</p>
                <p className='description'>At RexGalaxy Technology, we specialize in enhancing your online store's capabilities through custom Shopify application development. Our team of experienced developers leverages the flexibility of the Shopify platform to create tailored solutions that align seamlessly with your e-commerce objectives.</p>
            </div>

            </NavLink>


            <NavLink to='/services/health-and-careSoftware' className="row d-flex even-row" data-aos='fade-up'>
            <div className="col service-about-col" data-aos='fade-right'>
                <p className='heading'>&gt;Health & Care Softwares Development</p>
                <p className='description'>"Empowering Health and Care: Innovative Software Development with RexGalaxy Technology"
RexGalaxy Technology is dedicated to revolutionizing the health and care industry through cutting-edge software solutions. Our experienced development team creates bespoke applications that enhance patient care, streamline operations, and facilitate efficient data management.
</p>
            </div>
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-health-care-softwares.png" alt="react" style={{margin:"0px -12px"}} data-aos='fade-left'/>
            </div>
            </NavLink>


            <NavLink to="/services/businessApp" className="row d-flex odd-row" data-aos='fade-up'>
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-business-website.png" alt="react" style={{margin:"0px -12px"}} data-aos='fade-right' />
            </div>
            <div className="col service-about-col" data-aos='fade-left'>
                <p className='heading'>&gt;Business Website Development</p>
                <p className='description'>"Elevate Your Presence: Tailored Business Website Development with RexGalaxy Technology"
RexGalaxy Technology specializes in creating dynamic and effective business websites that leave a lasting impression. Our dedicated team combines creativity, functionality, and user-centric design to craft websites that align seamlessly with your brand and business goals.
.</p>
            </div>

            </NavLink>


            <NavLink to="/services/school-and-educationalApp" className="row d-flex even-row" data-aos='fade-up'>
            <div className="col service-about-col" data-aos='fade-right'> 
                <p className='heading'>&gt;School & Educational Website Development</p>
                <p className='description'>"Empowering Education: Custom School and Education Website Development with RexGalaxy Technology"
RexGalaxy Technology is dedicated to transforming the educational landscape through innovative website development. Our specialized team crafts custom solutions to meet the unique needs of schools, colleges, and educational institutions, ensuring a seamless online presence.
.</p>
            </div>
            <div className="col col-2 service-img-col">
                <img className='icon' src="https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/service-educational.png" alt="react" style={{margin:"0px -12px"}} data-aos='fade-left' />
            </div>
            </NavLink>


         


           
       </div>
    </>
  )
}

export default ServicesPage
