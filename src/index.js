import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const  App=React.lazy(()=> import("./App"));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
   <Suspense fallback={
      <div  style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"black",color:"white"}}>
        
        <h4 style={{fontWeight:"300",letterSpacing:"2px"}}>
          Welcome to RexGalaxy.....
    </h4>
      </div>
    }>
    <App />
    </Suspense>
   
   
   
  </React.StrictMode>
);


