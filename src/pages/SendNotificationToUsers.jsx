const SendNotificationToUsers = ()=>{
    return (
        <div className="user-detail">
            <div>
                <h4>SEND NOTIFICATION:</h4>
                
            </div>
            <div>
              <label for= "select year">SELECT YEAR</label><br />
                <input type="checkbox" /> I
                <input type="checkbox" /> II
                <input type="checkbox" /> III 
                <input type="checkbox" /> IV <br />    
                <input type="checkbox" /> BH-1 
                <input type="checkbox" /> BH-2
                <input type="checkbox" /> BH-3 
                <input type="checkbox" /> GH 
            </div>
            <label>
                 <input className="input-text" type="text" placeholder=" enter a message" />
                
            </label>
          
           <button className="login-btn"  >SEND</button> 
           <button className="login-btn"  >SCHEDULE</button>
    
             
        </div>
    )
};

export default SendNotificationToUsers;