// import React from 'react';
// import './Page.css';

// import { Button } from '@mui/material';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// import { Icon } from '@iconify/react';



// function Page(IconlabelTabs) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <br></br>
//       <p className='note'>Chef Booking</p>
//         <h3 className="box1"> Welcome back,</h3>
//         <p className="box3">continue Booking</p>
//         <div className='head2'>
//           <br></br>
//           <h7 className="days">How many days:</h7>
//           <br></br>
//           <br></br>
//           <div className='head3'>
//           <p className='picker'>From date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To date:</p>
//           <div class="vl"></div>
//           <p className='man'>3 days</p>
//           <div class="vl"></div>
//           <p className='Today'>03/07/2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05/07/2022</p>
      
//           </div>
          
//           <h7 className='days1'>How many hours:</h7>
//           <div className='head4'>
         
//           <p className='picker'>Start time: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End time:</p>
//           <div class="vl2"></div>
//           <p className='man'>3 hours</p>
//           <div class="vl2"></div>
//           <p className='alaram'>2:30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30</p>
          
//           </div>
//           <Button class="button">Confirm</Button>
//           <div className='head5'>
          
//           <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
//       <Tab icon={<Icon icon="feather:home" color="#33c9dc" width="40" height="40" /> } label="Home"/>
      
//       <Tab icon={<Icon icon="bi:person" color="#33c9dc" width="40" height="40" />} label="Profile"/>
//       <Tab icon={<Icon icon="eva:shopping-cart-outline" color="#33c9dc" width="40" height="40" />}  label="going to have"/>
//     </Tabs>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Page;
import React from 'react';
import './Page.css';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Icon } from '@iconify/react';



function Page(IconlabelTabs) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Page">
      <header className="Page-header">
        <br></br>
        <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
    <KeyboardBackspaceIcon/>
    
       <Typography>Chef Booking</Typography>
       </Grid>
        <h3 className="box1"> Welcome back,</h3>
        <p className="box3">continue Booking</p>
        <div className='Page2'>
          
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
              <p >03-07-2022 </p>
              <p >03-07-2022 </p>

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
         <p>02:30</p>
         <p>05:30</p>
          </Grid>
            </div>
            
          </div>
          
         
          <Button class="butn">Confirm</Button>
        
          <div className='head6'></div>

        </div>
      </header>
    </div>
  );
}

export default Page;

