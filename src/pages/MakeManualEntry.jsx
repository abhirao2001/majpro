import React from "react"
import { useState } from "react";
import './MakeManualEntry.css';
// import ManualData from "./components/ManualData";



const MakeManualEntry = ()=>{
   const[enterUserId, setEnterUserId]= useState('')
   const uIdChangeHandelar =(event)=>{
     setEnterUserId(event.target.value)
   };
   const submitHandler =(event)=>{
       event.preventDefault();
     const entryData ={
          data: enterUserId,
     }
     console.log(entryData);
     setEnterUserId('');
  
};

    return (    
    <div onSubmit={submitHandler} className="manual-entry">
             <div>
               <h8>Make Manual Entry</h8>
             </div>
        <label>
             <input className="input-text" value={enterUserId} type="text" onChange={uIdChangeHandelar} placeholder="Enter userId" />
        </label>
       <button className="submit-btn"   >SUBMIT</button>   
    </div>

)};

export default MakeManualEntry;