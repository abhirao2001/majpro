import React from "react";

const AddNewUser = ()=>{

    const ClickHandler =   ()=>{

    }
    return ( <div className="wrapper rounded bg-white">
                <div className="h3">Add New User</div>
                    <div className="form">
                      <div className="row">
                         <div className="col-value">
                           <label>Name</label>
                           <input type="text" className="form-control"  required/>
                         </div>
                         <div className="col-value">
                           <label>Roll Number</label>
                           <input type="text" className="form-control"  required/>
                         </div>
                         <div className="col-value">
                           <label>Mobile Number</label>
                           <input type="text" className="form-control" required/>
                         </div>
                         <div className="col-value">
                           <label>Email</label>
                           <input type="text" className="form-control"  required/>
                         </div>                   
                         <div className="col-value">
                           <label>Branch</label>
                           <input type="text" className="form-control"  required/>
                         </div>                    
                         <div className="col-value">
                            <label>Session</label>
                            <input type="text" className="form-control" required/>
                         </div>
                         <div className="col-value">
                           <label>Hostel</label>
                           <input type="text" className="form-control" required/>
                         </div>
                         <div className="col-value">
                           <label>Room Number</label>
                           <input type="text" className="form-control" required/>
                         </div>                   
                         <div className="col-value">
                           <label>Role</label>
                           <input type="text" className="form-control" required/>
                         </div>
                         </div>
                    {/* <button className="btn btn-primary mt-3" onClick={ClickHandler}>Submit</button> */}
                </div>
             </div>
)};

export default AddNewUser;