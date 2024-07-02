import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HireAndroidDeveloper, HireBlockchainDeveloper, HireCakePHPDeveloper, HireCodeIgniterDeveloper, HireContentWriter, HireDigitalMarketingExpert, HireFlutterDeveloper, HireFrontendDeveloper, HireIOSDeveloper, HireJavaDeveloper, HireLaravelDeveloper, HireMagentoDeveloper, HireReactDeveloper, HireSEOExpert, HireShopifyDeveloper, HireVideoEditors, HireWebDesigner, HireWebDeveloper, HireWebflowDeveloper, HireWooCommerceDeveloper, HireWordPressDeveloper } from './Components/HireDeveloper/HireDeveloper';
import Careers from './Components/Careers/Careers';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import OurVision from './Components/OurVision/OurVision';
import MobileResponsiveHireDeveloper from './Components/HireDeveloper/MobileResponsiveHireDeveloper';

const ContactUs = React.lazy(()=> import('./Components/ContactUs/ContactUs'));
// const ErrorPage = React.lazy(()=> import('./Components/ErrorPage/ErrorPage'));
const HomePage = React.lazy(()=> import('./Components/HomePage/HomePage'));
const ServicesPage = React.lazy(()=> import('./Components/ServicesPage/ServicesPage'));
const Footer = React.lazy(()=> import('./Components/Footer/Footer'));
const Navbar = React.lazy(()=> import('./Components/NavBar/Navbar'));
const SEO = React.lazy(()=> import('./Components/ServicesPage/SEO'));
const Android =React.lazy(()=> import('./Components/ServicesPage/Android'));
const BusinessApp = React.lazy(()=> import('./Components/ServicesPage/BusinessApp'));
const ECommerceApp = React.lazy(()=> import('./Components/ServicesPage/ECommerceApp'));
const FlutterApp = React.lazy(()=> import('./Components/ServicesPage/FlutterApp'));
const HealthAndCareSoftware = React.lazy(()=> import('./Components/ServicesPage/HealthAndCareSoftware'));
const IOSApp = React.lazy(()=>import('./Components/ServicesPage/IOSApp'));
const ReactApp = React.lazy(()=> import('./Components/ServicesPage/ReactApp'));
const SchoolAndEducationalApp = React.lazy(()=> import('./Components/ServicesPage/SchoolAndEducationalApp'));
const ShopifyApp = React.lazy(()=> import('./Components/ServicesPage/ShopifyApp'));
const WebApp = React.lazy(()=>import('./Components/ServicesPage/WebApp'));
const WordPressApp = React.lazy(()=>import('./Components/ServicesPage/WordPressApp'));


function App() {
  return (
    <div className="App">
       <BrowserRouter>
    
       <Navbar />
       <Routes>
        <Route path='/' element={<HomePage/>}>
       
        </Route>
        <Route path='/services' element={<ServicesPage/>}></Route>
        <Route path='/services/seo' element={<SEO/>}></Route>
        <Route path='/services/androidApp' element={<Android/>}></Route>
        <Route path='/services/businessApp' element={<BusinessApp/>}></Route>
        <Route path='/services/e-commerceApp' element={<ECommerceApp/>}></Route>
        <Route path='/services/flutterApp' element={<FlutterApp/>}></Route>
        <Route path='/services/iosApp' element={<IOSApp/>}></Route>
        <Route path='/services/health-and-careSoftware' element={<HealthAndCareSoftware/>}></Route>
        <Route path='/services/reactApp' element={<ReactApp/>}></Route>
        <Route path='/services/school-and-educationalApp' element={<SchoolAndEducationalApp/>}></Route>
        <Route path='/services/shopifyApp' element={<ShopifyApp/>}></Route>
        <Route path='/services/webApp' element={<WebApp/>}></Route>
        <Route path='/services/wordpressApp' element={<WordPressApp/>}></Route>
        {/* <Route path='*' element={<ErrorPage/>}></Route> */}
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        
        <Route path='/hire-developers' element={<MobileResponsiveHireDeveloper/>}></Route>
        <Route path='/hire-android-developer' element={<HireAndroidDeveloper/>}></Route>
        <Route path='/hire-codeIgniter-developer' element={<HireCodeIgniterDeveloper/>}></Route>
        <Route path='/hire-flutter-developer' element={<HireFlutterDeveloper/>}></Route>
        <Route path='/hire-java-developer' element={<HireJavaDeveloper/>}></Route>
        <Route path='/hire-react-developer' element={<HireReactDeveloper/>}></Route>
        <Route path='/hire-web-developer' element={<HireWebDeveloper/>}></Route>
        <Route path='/hire-wordPress-developer' element={<HireWordPressDeveloper/>}></Route>
        <Route path='/hire-blockchain-developer' element={<HireBlockchainDeveloper/>}></Route>
        <Route path='/hire-content-writer' element={<HireContentWriter/>}></Route>
        <Route path='/hire-frontend-developer' element={<HireFrontendDeveloper/>}></Route>
        <Route path='/hire-laravel-developer' element={<HireLaravelDeveloper/>}></Route>
        <Route path='/hire-seo-expert' element={<HireSEOExpert/>}></Route>
        <Route path='/hire-video-editors' element={<HireVideoEditors/>}></Route>
        <Route path='/hire-webflow-developer' element={<HireWebflowDeveloper/>}></Route>
        <Route path='/hire-cakephp-developer' element={<HireCakePHPDeveloper/>}></Route>
        <Route path='/hire-digital-marketing-expert' element={<HireDigitalMarketingExpert/>}></Route>
        <Route path='/hire-ios-developer' element={<HireIOSDeveloper/>}></Route>
        <Route path='/hire-magento-developer' element={<HireMagentoDeveloper/>}></Route>
        <Route path='/hire-shopify-developer' element={<HireShopifyDeveloper/>}></Route>
        <Route path='/hire-web-designer' element={<HireWebDesigner/>}></Route>
        <Route path='/hire-woo-commerce-developer' element={<HireWooCommerceDeveloper/>}></Route>
        <Route path='/careers' element={<Careers/>}></Route>
        <Route path='/who-we-are' element={<WhoWeAre/>}></Route>
        <Route path='/our-vision' element={<OurVision/>}></Route>
       </Routes>
       
       <Footer/>

       </BrowserRouter>

       {/* <img id='plane' src="Media/plane.png" alt="plane" /> */}
    </div>
  );
}

export default App;
