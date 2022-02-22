import React from "react";
 import { BrowserRouter, Route, Routes, } from "react-router-dom";
import './App.css';
import Samsung from './Component/Samsung';
import Loginpage from './Component/Loginpage';
import Profile from './Component/Profile';
import Booking from './Component/Booking';
import Page from './Component/Page';
import Confirm from './Component/Confirm';
import Done from './Component/Done';
import User from './Component/User';
import Order from './Component/Order';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



function App() {


  return (
    
    <div>
    
    <BrowserRouter>
      <Routes>
        
        
        <Route path="/samsung" element={<Samsung />}/>


        
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/booking" element={<Booking/>}/>
       <Route path="/page" element={<Page/>}/>
      <Route path="/confirm" element={<Confirm/>}/>
      <Route path="/done" element={<Done/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/order" element={<Order/>}/>

          
          
         
      
      </Routes>
    </BrowserRouter>

    <nav class="nav">
    <a href="#" class="nav--link">
    <HomeOutlinedIcon style={{fontSize:"50px"}}/>
      <span class="nav--text">Home</span>
    </a>
    <a href="#" class="nav--link">
    <PersonOutlinedIcon style={{fontSize:"50px"}}/>
      <span class="nav--text">Profile</span>
    </a>
    <a href="#" class="nav--link">
    <ShoppingCartOutlinedIcon style={{fontSize:"50px"}}/>
      <span class="nav--text">Going to have</span>
    </a>
  </nav>
    </div>
  
   

  );


}


export default App;