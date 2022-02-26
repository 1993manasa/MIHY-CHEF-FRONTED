
import React from 'react';
import female from './female.svg';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './User.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';


function User(IconlabelTabs) {
  const [value, setValue,] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      
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
<div className='user2'>
  <div class='liked'>
    <p class="order">Liked chef</p>
  
  </div>
  <p class="order1">Orderd chef</p>
  
  <div class="flex-user"> 
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

  
  
 

          <div className='head6'></div>

</div>
    
    </div>
  );
}

export default User;
