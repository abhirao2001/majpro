import React from "react";
import './MakeManualEntry.css';


const MakeManualEntry = ()=>{
   const clickHandler = ()=>{
    alert("submit")
   }
    return (    
    <div className="manual-entry">
             <div>
               <h8>Make Manual Entry</h8>
             </div>
        <label>
             <input type="text" placeholder="Enter Student Roll no." />
        </label>
       <button className="login-btn"   onClick={clickHandler}>SUBMIT</button>   
    </div>

)};

export default MakeManualEntry;