import React from 'react';
import female from './female.svg';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Order.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';


function Order(IconlabelTabs) {
  const [value, setValue,] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <header className="Order-header">
      <br></br>
      <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
    <KeyboardBackspace/>
      
     <Typography>Chef Profile</Typography>
     </Grid>
        <Avatar
  alt='female'
  src={female}
  sx={{ width: 150, height: 150 ,marginTop: -3, marginLeft: 12,}}
/><p className="icon">Maaria</p>
<div className='order2'>
<div class='liked'>
    <p class="order">Liked chef</p>
  
  </div>
  <p class="order1">Orderd chef</p>
  <div class="flex-order"> 
  <img src={female} alt="feamale" width="32%" />
  
  <img src={female} alt="feamale" width="32%"/>
  <img src={female} alt="feamale" width="32%"/>
  <Grid container sx={{color:"white"}} style={{display:"flex",justifyContent:"space-around",fontSize:"small",marginTop:"-2rem",marginLeft:"0rem"}}> 

<p>Maaria</p>
    <p>Maaria</p>
    <p>Maaria</p>
   

  </Grid>
  <img src={female} alt="feamale" width="32%"/>
  
  <img src={female} alt="feamale" width="32%"/>
  <img src={female} alt="feamale" width="32%"/>
  <Grid container sx={{color:"white"}} style={{display:"flex",justifyContent:"space-around",fontSize:"small",marginTop:"-2rem",marginLeft:"0rem"}}> 
  <p>Maaria</p>
    
    <p>Maaria</p>
    <p>Maaria</p>
</Grid>
  <img src={female} alt="feamale" width="32%"/>
  <img src={female} alt="feamale" width="32%"/>
  <img src={female} alt="feamale" width="32%"/>
 
 
<Grid container sx={{color:"white"}} style={{display:"flex",justifyContent:"space-around",fontSize:"small",marginTop:"-2rem",marginLeft:"0rem"}}> 
  <p>Maaria</p>
    
    <p>Maaria</p>
    <p>Maaria</p>
</Grid>
</div>
  
  {/* <Avatar  alt='female'
  src={female}
  sx={{ width: 110, height: 110 ,marginTop: 3, marginLeft: -1,}}
/>
 

<p className="icon1">Maaria</p> */}

{/* <Avatar
  alt='female'
  src={female}
  sx={{ width: 110, height: 110 ,marginTop: -15, marginLeft: 13,}}
/><p className="icon2">Maaria</p>

<Avatar 
  alt='female'
  src={female}
  sx={{ width: 110, height: 110 ,marginTop: -15, marginLeft: 28,}}

/><p className="icon3">Maaria</p>
<Avatar  alt='female'
  src={female}
  sx={{ width: 110, height: 110 ,marginTop: 3, marginLeft: -1,}}
/>
 

<p className="icon1">Maaria</p>

<Avatar
  alt='female'
  src={female}
  sx={{ width: 110, height: 110 ,marginTop: -15, marginLeft: 13,}}
/><p className="icon2">Maaria</p>

<Avatar 
  alt='female'
  src={female}
  sx={{ width: 110, height: 110 ,marginTop: -15, marginLeft: 28,}}

/><p className="icon3">Maaria</p> */}
<div className='order5'>
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

export default Order;
