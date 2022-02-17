import React from 'react';
import './Done.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import { color } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';


function Done(IconlabelTabs) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className="App">
      <header className="Done-header">
      
    
        <br></br>
        <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
    <KeyboardBackspaceIcon/>
    
       <Typography>Chef Booking</Typography>
       </Grid>
        <h3 className="box1"> Welcome back,</h3>
        <p className="box3">continue Booking</p>
        <div className='Done2'>
          <br/>
          <br/>
          <br/>
          
        <Icon icon="ic:baseline-cloud-done" color="#33c9dc" width="140" height="140" margin="60"/>
        <h3 style={{color:"#33C9DC"}}>Booking is Done</h3>
        <br/>
        <div className='Done5'>
          <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<Icon icon="feather:home" color="#33c9dc" width="40" height="40" /> } label="Home"/>
      
      <Tab icon={<Icon icon="bi:person" color="#33c9dc" width="40" height="40" />} label="Profile"/>
      <Tab icon={<Icon icon="eva:shopping-cart-outline" color="#33c9dc" width="40" height="40" />}  label="going to have"/>
    </Tabs>
    
          
          </div>
          <div className='head6'></div>
          </div>
        
        
      </header>
    </div>
  );
}

export default Done;
