import React ,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const MobileResponsiveHireDeveloper = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const backgroundStyle = {
        backgroundImage: "url(https://rexgalaxywebimages.s3.ap-southeast-2.amazonaws.com/hire-developer-background.png)",
    }
    const backdropfilter = {
        backdropFilter:"blur(15px)",
        textDecoration:"none",
        
    }
  return (
    <>
     <div className="container-fluid p-5 " style={backgroundStyle}>
        <div className="row mt-5 py-5 justify-content-center">
            <NavLink to='/hire-android-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Android Developer</h1>
            </NavLink>
            <NavLink to='/hire-ios-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>IOS Developer</h1>
            </NavLink>
            <NavLink to='/hire-codeIgniter-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Codelgniter Developer</h1>
            </NavLink>
            <NavLink to='/hire-flutter-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Flutter Developer</h1>
            </NavLink>
            <NavLink to='/hire-java-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Java Developer</h1>
            </NavLink>
            <NavLink to='/hire-blockchain-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Blockchain Developer</h1>
            </NavLink>
            <NavLink to='/hire-content-writer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Content Writer</h1>
            </NavLink>
            <NavLink to='/hire-frontend-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Frontend Developer</h1>
            </NavLink>
            <NavLink to='/hire-laravel-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Laravel Developer</h1>
            </NavLink>
            <NavLink to='/hire-cakephp-developer' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>CakePHP Developer</h1>
            </NavLink>
            <NavLink to='/hire-digital-marketing-expert' style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Digital Marketing Expert</h1>
            </NavLink>
            <NavLink to="/hire-magento-developer" style={backdropfilter} className="col col-lg-5  col-12 rounded border mx-sm-5 border-ligth border-white text-center py-5 my-2 text-white">
                <h1>Magento Developer</h1>
            </NavLink>
        </div>
     </div>
    </>
  )
}

export default MobileResponsiveHireDeveloper
