import React from 'react';
import { Paper } from "@mui/material";

import './Samsung.css';
import { Icon } from '@iconify/react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import  Typography  from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Img1 from './img1.jpg';
import Img2 from './img2.webp';
import Img3 from './img3.jpg';
import Img4 from './img4.png';
// import { Avatar } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from "@mui/material/Grid";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Rating from '@mui/material/Rating';
import { color, fontSize } from '@mui/system';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 15,
 marginTop: theme.spacing(4),
  width: '90%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(10),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '150px',
    [theme.breakpoints.up('md')]: {
      width: '10ch',
    },
  },
}));

function Samsung(IconlabelTabs) {
  const [value, setValue] = React.useState(0);
   
   
  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <div className="Samsung">
      <header className="Samsung-header">
     <br></br>
     
     <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
     <KeyboardBackspaceIcon/>
       
      <Typography>Home Page</Typography>
      <Grid item xs={1}>
        
      <Grid container sx={{ color: '#33c9dc'}} style={{marginLeft: '12rem'}}>
      <NotificationsNoneIcon/>
      <Grid item xs={1}>
        
      <MenuIcon/>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
      
       <br></br>
      <Grid container sx={{ color:'white'}} style={{marginTop:"-1rem",marginLeft:'2rem'}}>
        <h2> Welcome back,</h2>
        </Grid>
        <Grid container sx={{ color:'white'}} style={{marginTop:"-1rem",marginLeft:'2rem', fontSize:'0.6rem'}}>

        <p>Here you can choose a chef according to your taste and near to your location....</p>
        </Grid>
        
        <div className='sam2'>
        <Search>
            <SearchIconWrapper>
            <Icon icon="ep:search" color="#055797" width="20" height="20 " />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Chef name, cuisine, location or a dish."
              inputProps={{ 'aria-label': 'Chef name, cuisine, location or a dish.' }}
            />
          </Search>
          <br></br>
          <br></br>
          <span style={{color:"white",marginRight:"12rem"}}>Our top rated chef</span>
          <span style={{color:"white"}}>More</span>
         <div class="flex-sung">
           <div>
             
             <div  class="sung">
               <span style={{color:"white",marginRight:"4rem"}}>Profile Picture</span>
               
             </div>

             <h4 style={{color:"#008394",marginTop:"0rem",marginRight:"6rem"}}>Name
             </h4>
            <p style={{color:"#008394",fontSize:"55%",marginTop:"-1rem",marginLeft:"0rem"}}>famous in Indian, chinese,
             kerala food.</p> 
             <Rating defaultValue={2}/>
             <Grid container sx={{ color:"#008394"}} style={{marginLeft:'9rem',marginTop:'-1.5rem',fontSize:'10'}}>
             <AccountCircleOutlinedIcon/>

            </Grid>
            
            
            
             
           </div>
            <div>
            <div  class="sung2">
               <span style={{color:"white",marginRight:"3rem"}}>Profile Picture</span>
               
             </div>
             <Grid container sx={{ color:"#008394"}} style={{marginTop:"-1rem"}}>

             <h4 >Name
             </h4>
            <p style={{marginTop:"3rem",fontSize:"55%",marginRight:"0rem"}}>famous in Indian food.</p> 
             <Rating defaultValue={2}/>
             
            </Grid>
            </div>
          
           </div>
           <br></br>
           <span style={{color:"white",marginRight:"17rem"}}>Categories </span>      
          
 <div class="column">
  <img src={Img1} alt="img1" width="65"/>
  
  <img src={Img2} alt="img2" width="65"/>

  <img src={Img3} alt="img3" width="65"/>
  <img src={Img4} alt="img4" width="65"/>
  </div>
  <Grid container sx={{color:"white"}} style={{display:"flex",justifyContent:"space-around",fontSize:"small"}}> 
  <p>Southindian</p>
  <p>Northindian</p>
  <p>Non-veg</p>
  <p>chinese</p>
  </Grid>
  
  




  {/* <div class="navbar">
<Grid container sx={{ color:"#33C9DC"}} style={{display:"flex",justifyContent:"space-around"}}>
<a href="#home">
Home</a>
<HomeOutlinedIcon style={{fontSize:"350%"}}/>


    <PersonOutlinedIcon style={{fontSize:"350%"}}/>
    <ShoppingCartOutlinedIcon style={{fontSize:"350%"}}/>
</Grid> */}
    

  
  
{/* 
  <a href="#Profile">Profile</a>
  <a href="#Going to have">Going to have</a>

  
</div> */}

  {/* <Paper sx={{ position: 'fixed', bottom: 8, left: 20, right: 1,width: 385, }} elevation={0} >


      <BottomNavigation

        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon style={{color:"#33C9DC",fontSize:"300%"}} />} />
        <BottomNavigationAction label="Person" icon={<PersonOutlinedIcon  style={{color:"#33C9DC",fontSize:"300%"}} />} />
        <BottomNavigationAction label="going to have" icon={<ShoppingCartOutlinedIcon  style={{color:"#33C9DC",fontSize:"300%"}} />} />
      </BottomNavigation>
      
    </Paper>
  */}


 {/* <div className='sung5'>
   
          <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<Icon icon="feather:home" color="#33c9dc" width="40" height="40" /> } label="Home"/>
      
      <Tab icon={<Icon icon="bi:person" color="#33c9dc" width="40" height="40"/>} label="Profile"/>
      <Tab icon={<Icon icon="eva:shopping-cart-outline" color="#33c9dc" width="40" height="40"/>}  label="going to have"/>
    </Tabs>
    
          </div> */}
          <div className='head6'></div>
        </div>
      </header>
    </div>
  );
}

export default Samsung;
