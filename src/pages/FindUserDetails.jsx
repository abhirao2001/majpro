import React from "react";
import './FindUserDetails.css';

const FindUserDetails = ()=>{

     const Popup =()=>{
    
     }
    return (
    <div className="user-detail">
             <div>
               <h8>Find User Details</h8>
             </div>
        <label>
             <input className="input-text" type="text" placeholder="Enter userId" />
        </label>
       <button className="login-btn"  onClick={Popup}>SUBMIT</button>
         
    </div>
)};

export default FindUserDetails;