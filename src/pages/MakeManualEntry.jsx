import React from "react"
import { useState } from "react";
import ManualData from "../components/ManualData";
import './MakeManualEntry.css';




const MakeManualEntry = ()=>{
   const[enterUserId, setEnterUserId]= useState('')
   const uIdChangeHandelar =(event)=>{
     setEnterUserId(event.target.value)
   };
   const submitHandler =(event)=>{
       event.preventDefault();
       ManualData();
     const entryData ={
          enterUserId: "",
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
             <input className="input-text" value={enterUserId} type="text" onChange={uIdChangeHandelar} placeholder="Enter userId" /><br />
        </label>
       <button className="submit-btn">SUBMIT</button> 
      
    </div>


)};

export default MakeManualEntry;