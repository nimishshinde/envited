import React, { useEffect, useState } from 'react';
import "./Event.css";

const dataObj = localStorage.getItem("EventObj");
console.log(JSON.parse(dataObj));

function Event() {

  // const [dataObj, setDataObj] = useState({});

  useEffect(()=>{
    // setDataObj(JSON.parse(localStorage.getItem("EventObj")));
  },[])

  return <div className="maineventstyle">
    <div className='subeventstyle' >
      <div>
        <div className='eventtxt'> </div>
      </div>
      <div>haha</div>
    </div>

  </div>;
}

export default Event