import React from 'react';
import './Booking.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Icon } from '@iconify/react';



function Booking(IconlabelTabs) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Booking">
        <br></br>
        <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
    <KeyboardBackspaceIcon/>
    
       <Typography>Chef Booking</Typography>
       </Grid>
        <h3 className="box1"> Welcome back,</h3>
        <p className="box3">continue Booking</p>
        <div className='booking2'>
          
          <h3 style={{color:"white",marginRight:"12rem"}}>How many days:</h3>
          <div class="flex-head">
            <div>
              <Grid container sx={{color:"white"}} style={{display:"flex",justifyContent:"space-around"}}>
              <p style={{fontSize:"20px",marginRight:"3rem"}}>From date:</p>
              <p style={{fontSize:"20px"}}>To date:</p>
              </Grid>
              
              <div class="vl"></div>
              <p style={{color:"gray"}}>3<br></br> days</p>
          <div class="vl"></div>
             
          
              
                    

              <Grid container sx={{color:"white" }}style={{display:"flex",justifyContent:"space-around",marginBottom:"3rem"}}>
              <DateRangeIcon style={{fontSize:"35px",marginRight:"3rem"}}/>
          <DateRangeIcon style={{fontSize:"35px"}}/>
          </Grid>
          </div>
          <h3 style={{color:"white",marginRight:"11rem"}}>How many hours:</h3>

            <div style={{marginTop:"1rem"}}>
            <Grid container sx={{color:"white"}} style={{display:"flex",justifyContent:"space-around"}}>
              <p style={{fontSize:"20px",marginRight:"3rem"}}>Start Time:</p>
              <p style={{fontSize:"20px"}}>End Time:</p>
              </Grid>
              <div class="vl"></div>
              <p style={{color:"gray"}}>3<br></br> hours</p>
          <div class="vl"></div>
            <Grid container sx={{color:"white" }}style={{display:"flex",justifyContent:"space-around",marginTop:"0rem"}}>
              <AccessTimeIcon style={{fontSize:"35px",marginRight:"3rem"}}/>
          <AccessTimeIcon style={{fontSize:"35px"}}/>
          </Grid>
            </div>
            
          </div>
          
         
          <Button class="butn">Confirm</Button>
          
          
          </div>
          <div className='head6'></div>

        </div>
      
    
  );
}

export default Booking;
