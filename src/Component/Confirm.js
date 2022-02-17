import React from 'react';
import './Confirm.css';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import { color } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { lightGreen } from '@mui/material/colors';
import { Icon } from '@iconify/react';

function Confirm(IconlabelTabs) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <header className="Confirm-header">
      <br></br>
      <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
    <KeyboardBackspaceIcon/>
    
       <Typography>Chef Booking</Typography>
       </Grid>
        <h3 className="box1"> Welcome back,</h3>
        <p className="box3">continue Booking</p>
        <div className="confirm">
          <div className='confirm2'>
           <p className='booking'>Your booking is on Monday 03-07-2022<br></br>to Wednesday 05-07-2022 at 2:30pm <br></br>to 5:30pm<br></br><br></br>Days:3days<br></br>Time:3 hours every day</p>
           <Button class="button">Confirm</Button>
          </div>
          
          <div className='confirm3'>
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

export default Confirm;
