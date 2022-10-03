import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { DatePicker, TimePicker } from "antd";
import { ImLocation } from 'react-icons/im';
import { MdAccessTimeFilled, MdOutlineDateRange, MdOutlineDescription, MdInsertPhoto, MdCelebration } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { GrLinkNext } from 'react-icons/gr';

import "antd/dist/antd.css";
import "./Create.css";

const initialState = {
   eventName: "",
   hostName: "",
   startDate: "",
   endDate: "",
   time: '',
   photoURL: "",
   location: "",
   description: "",
}

const reducerFn = (state = initialState, action) => {
   console.log(action, state)

   switch (action.type) {

     case "event":
       return { ...state, eventName: action.payload };

     case "host":
       return { ...state, hostName: action.payload };

     case "start":
       return { ...state, startDate: action.payload };

     case "end":
       return { ...state, endDate: action.payload };

     case "time":
       return { ...state, time: action.payload };

     case "photo":
       return { ...state, photoURL: action.payload };

     case "location":
       return { ...state, location: action.payload };

     case "description":
       return { ...state, description: action.payload };

     default:
       return state;
   }
};



const { RangePicker } = DatePicker;

function Create() {
   const [dataObj, dispatch] = useReducer(reducerFn, initialState);

   const navigate = useNavigate();

   const onChangeTime = (time, timeString) => {
      dispatch({
         type: 'time',
         paylaod: timeString
      })
   };

   useEffect(()=>{
      console.log(dataObj)
   },[dataObj])

   function handleDateChange(start, end) {
      dispatch({ type: 'start', payload: moment(start[0]?._d).format("DD MMM YYYY") })
      dispatch({ type: 'end', paylaod: moment(start[1]?._d).format("DD MMM YYYY") })
   }

   function handleNext() {
      if (dataObj.hostName == "" || dataObj.eventName == "" || dataObj.start == "" || dataObj.end == "" || dataObj.location == "" || dataObj.description == "" || dataObj.time == "" || dataObj.photoURL == "" ){
         alert("Please Enter all Input Fields");
      }else{
      localStorage.setItem("EventObj", JSON.stringify(dataObj));
      navigate("/event");
      }
      console.log(dataObj);
   }

   return (
     <div>
       <div className="maincreatestyle">
         <div className="neweventtxt">
           <span className="specialtxt"> Create a new Event </span>
           <div>
             <div className="inputcls">
               <div style={{ width: "45%" }}>
                 <div className="inputlabetxtctn">
                   <div>
                     {" "}
                     <span className="iconsstyle">
                       {" "}
                       <MdCelebration />{" "}
                     </span>{" "}
                     Event name
                   </div>
                   <input
                     className="inputclslabel"
                     type="text"
                     onChange={(e) =>{
                           dispatch({ type: "event", paylaod: e.target.value })
                        }
                     }
                   />
                 </div>
                 <div className="inputlabetxtctn">
                   <div>
                     {" "}
                     <span className="iconsstyle">
                       {" "}
                       <MdOutlineDateRange />{" "}
                     </span>{" "}
                     Start To End{" "}
                     <span style={{ color: "#BDBDBD", fontWeight: "400" }}>
                       {" "}
                       ( Dates ){" "}
                     </span>{" "}
                   </div>
                   {/* <input className="inputclslabel" type="text" name="" id="" /> */}
                   <RangePicker
                     onChange={(start, end) => handleDateChange(start, end)}
                     bordered={false}
                     size="large"
                     style={{ width: "100%", marginTop: "8px" }}
                   />
                 </div>

                 <div className="inputlabetxtctn">
                   <div>
                     {" "}
                     <span className="iconsstyle">
                       {" "}
                       <MdInsertPhoto />{" "}
                     </span>{" "}
                     Photo URL{" "}
                   </div>
                   <input
                     className="inputclslabel"
                     type="text"
                     onChange={(e) =>
                       dispatch({ type: "photo", paylaod: e.target.value })
                     }
                   />
                 </div>
               </div>
               <div style={{ width: "45%" }}>
                 <div className="inputlabetxtctn">
                   <div>
                     {" "}
                     <span className="iconsstyle">
                       {" "}
                       <CgProfile />{" "}
                     </span>{" "}
                     Host name
                   </div>
                   <input
                     className="inputclslabel"
                     type="text"
                     onChange={(e) =>
                       dispatch({ type: "host", paylaod: e.target.value })
                     }
                   />
                 </div>

                 <div className="inputlabetxtctn">
                   <div>
                     <span className="iconsstyle">
                       {" "}
                       <MdAccessTimeFilled />{" "}
                     </span>{" "}
                     Time{" "}
                     <span style={{ color: "#BDBDBD", fontWeight: "400" }}>
                       {" "}
                       ( Dates ){" "}
                     </span>{" "}
                   </div>
                   <TimePicker
                     size="large"
                     bordered={false}
                     use12Hours
                     format="h:mm:ss A"
                     onChange={(time, timeString) =>
                       onChangeTime(time, timeString)
                     }
                     style={{ width: "100%", marginTop: "8px" }}
                   />
                 </div>
                 <div className="inputlabetxtctn">
                   <div>
                     {" "}
                     <span className="iconsstyle">
                       {" "}
                       <ImLocation />{" "}
                     </span>{" "}
                     Location{" "}
                   </div>
                   <input
                     className="inputclslabel"
                     type="text"
                     onChange={(e) =>
                       dispatch({ type: "location", paylaod: e.target.value })
                     }
                   />
                 </div>
               </div>
             </div>
             <div className="inputlabetxtctn">
               <div>
                 {" "}
                 <span className="iconsstyle">
                   {" "}
                   <MdOutlineDescription />{" "}
                 </span>{" "}
                 Description{" "}
               </div>
               <input
                 className="inputclslabel"
                 type="text"
                 onChange={(e) =>
                   dispatch({ type: "description", paylaod: e.target.value })
                 }
               />
             </div>
             <div className="nextbtnctn">
               <button className="nextbtn" onClick={() => handleNext()}>
                 {" "}
                 Next{" "}
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Create;
// Event name, Host name, Start and End time/date,
// Location and Event photo
