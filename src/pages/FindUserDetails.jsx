import React from "react";
import './FindUserDetails.css';

const Popup =()=>{
    
}

const FindUserDetails = ()=>{
    return (
    <div className="user-detail">
             <div>
               <h8>Find User Details</h8>
             </div>
        <label>
             <input type="text" placeholder="Enter Student Roll no." />
        </label>
       <button className="login-btn"  onClick={Popup}>SUBMIT</button>
         
    </div>
)};

export default FindUserDetails;