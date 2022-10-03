import React from "react";
import { useNavigate } from "react-router-dom";

import LandingImage from "../assests/Landingpageimage.svg";
import "./Landing.css";

function Landing() {
   const navigate = useNavigate();

   function handleEventClicked(){
      navigate("/create");
   }

   return (
      <div
         style={{ width: "100vw", height: "100vh", backgroundColor: "#F6F2FF" }}
         className='landinmainstyle'
      >
         <div  >
            <img src={LandingImage} alt="" srcset="" className="imgcls" style={{height: '26rem'}} />
         </div>
         <div>
            <div className="normaltxt" >Imagine if</div>
            <div className="snaptxt" >Snapchat</div>
            <div className="normaltxt" >had events.</div>
            <div style={{ marginTop: '8px' }} >
               <div className="smalltxt" >
               Easily host and share events with your friends
               </div>
               <div className="smalltxt" >
                  across any social media.
               </div>
            </div>

            <div style={{ marginTop:'2rem', textAlign:'right' }} >
               <button onClick={() => handleEventClicked()} className="btn" > 🎉 Create my event </button>
            </div>
         </div>
         
         


      </div>
   );
}

export default Landing;
