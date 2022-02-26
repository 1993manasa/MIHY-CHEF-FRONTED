import React from "react";
import './Profile.css';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Avatar from '@mui/material/Avatar';
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { BottomNavigationAction, Typography } from "@mui/material";
import female from './female.svg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Icon } from '@iconify/react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Fab } from "@mui/material";

  function Profile(IconlabelTabs) {
    const [value, setValue, makeStyles] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    

  return (
    <div className="App">
      
      <br></br>
      <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
     <KeyboardBackspaceIcon/>
     
        <Typography>Chef Profile</Typography>
        </Grid>
        <Avatar
  alt='female'
  src={female}
  sx={{ width: 150, height: 150 ,marginTop: -3, marginLeft: 12,}}
/><p className="icon">Maaria</p>

<Tabs
        
        
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        
      >
{/* <Tabs value={value} onChange={handleChange} aria-label="icon tabs example"> */}
      <Tab icon={<Icon icon="ic:outline-note-alt" color="#33c9dc" width="20" height="20" />}/>
      
      <Tab orientation="vertical"icon={<Icon icon="uim:favorite" color="#33c9dc" width="20" height="20" />} />
      <Tab icon={<Icon icon="ic:outline-favorite" color="#33c9dc" width="20" height="20" />} />
    </Tabs>
          
    
    
    <div className='profile2'>
      <Grid container style={{marginTop:"1rem",display:"flex",justifyContent:"space-around"}}>
      <Fab size="small">
    
    <Icon icon="typcn:social-youtube-circular" color="#33c9dc" width="30" height="30" />
    </Fab>
    <Fab size="small">
    <Icon icon="fluent:call-48-filled" color="#33c9dc" width="30" height="30" />
    </Fab>
    <Fab size="small">
    <Icon icon="ci:location" color="#33c9dc" width="30" height="30" />
    </Fab>
    <Fab size="small">

    <Icon icon="bx:bx-book-add" color="#33c9dc" width="30" height="30" />
   </Fab>
   </Grid>
    <br/>
    <br/>
    <div  class='flex-profile'>
    <div ></div>
    <div></div>
    <div></div>
    </div>
    <div  class='flex-profile'>
    <div ></div>
    <div></div>
    <div></div>
    </div>
    <div  class='flex-profile'>
    <div ></div>
    <div></div>
    <div></div>
    </div>
    <div  class='flex-profile'>
    <div ></div>
    <div></div>
    <div></div>
    </div>
    {/* <div className='head5'>
          <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<Icon icon="feather:home" color="#33c9dc" width="40" height="40" /> } label="Home"/>
      
      <Tab icon={<Icon icon="bi:person" color="#33c9dc" width="40" height="40" />} label="Profile"/>
      <Tab icon={<Icon icon="eva:shopping-cart-outline" color="#33c9dc" width="40" height="40" />}  label="going to have"/>
    </Tabs>
          
          </div> */}
          
   </div>
        
      
    </div>
  );
}




export default Profile;