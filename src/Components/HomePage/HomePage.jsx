import React,{useEffect} from 'react';
import './HomePage.css';
import FirstAutoslide from './FirstAutoslide';
import SecondAutoslide from './SecondAutoslide';

import TopSlide from './TopSlide';
import OurValues from './OurValues';
import SecondSection from './SecondSection';
const AboutUs = React.lazy(()=> import('./AboutUs'));
// const FirstSection = React.lazy(()=>import('./FirstSection'));
// const AppsAndSoftwaresDevelopmentProcess = React.lazy(()=>import('./AppsAndSoftwaresDevelopmentProcess'));
// const SecondSection=React.lazy(()=>import("./SecondSection"));
const ProvideServices=React.lazy(()=>import("./ProvideServices"));

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
    <div className="homepage">
      <TopSlide/>
      {/* <FirstSection/> */}
      <SecondSection/>
       <FirstAutoslide/>
       
       <SecondAutoslide/>
      <AboutUs/>
      <OurValues/>
      
      

      {/* <AppsAndSoftwaresDevelopmentProcess/> */}
    {/* <SecondSection/> */}
    <ProvideServices/>

    </div>
  
   </>
  )
}

export default HomePage
