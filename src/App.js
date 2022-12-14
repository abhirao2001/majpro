    import React from 'react';
    import './App.css';
    import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
    import Home from './pages/Home';
    import FindUserDetails from './pages/FindUserDetails';
    import MakeManualEntry from './pages/MakeManualEntry';
    import AddNewUser from './pages/AddNewUser';
    import Notice from './pages/Notice';
    import LogsViewer from './pages/LogsViewer';
    import SendNotificationToUsers from './pages/SendNotificationToUsers';
    import LogOut from './pages/LogOut';
    import Sidebar from './components/Sidebar';
    import Toolbar from './components/Logo';
    import { useState } from "react";
    

      function App () {
        const[sidebar, setSidebar] = useState(false);
       
        const toggle = ()=> {setSidebar(!sidebar)
       };
      return (
        <div>   
       <Router>
        <Toolbar openSidebar={toggle}/>
          <Sidebar sidebar={sidebar}>
            <Routes>
              <Route path='/' element={<Home/>} />        
              <Route path='/FindUserDetails' element={<FindUserDetails/>} />
              <Route path='/MakeManualEntry' element={<MakeManualEntry/>} />
              <Route path='/AddNewUser' element={<AddNewUser/>} />
              <Route path='/Notice' element={<Notice/>} />
              <Route path='/LogsViewer' element={<LogsViewer/>} />
              <Route path='/SendNotificationToUsers' element={<SendNotificationToUsers/>} />
              <Route path='/LogOut' element={<LogOut/>} />
            </Routes>
          </Sidebar>
        </Router>
        </div>
        );
      };
    

export default App;
