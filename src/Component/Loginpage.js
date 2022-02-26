import React from "react";
import './Login.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, IconButton, Input, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { InputAdornment } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import { Icon } from '@iconify/react';



function Loginpage() {
  return (
    

    <div className="Login">
  
        <br></br>
      <Grid container sx={{ color: 'white'}} style={{  marginBottom: '1rem',marginLeft:'2rem'}}>
    
     <KeyboardBackspaceIcon/>
     
        <Typography>Sign in</Typography>
        </Grid>
        <Grid container sx={{color:"#ffff"}} style={{ marginLeft:'3rem'}}>
        <h2> Welcome back,</h2>
        </Grid>
        <Grid container sx={{color:"#ffff"}}  style={{ marginLeft:'3rem',marginTop:'-1rem'}}>
        <p>Sign in to continue</p>
        </Grid>
        <div className="had">
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '19ch',height:"2ch" },
        
          
        
            
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
                padding:"1",
                borderWidth:"1",
                borderRadius:"0",
              },
              '& .MuiInputBase-input': {
                fontSize:"6",
            
              },
             
                  
            }
           
      }}
      noValidate
      autoComplete="off"
    

    >
      
        
      <br></br>
      <br></br>
      <div>
      
      <FormControl sx={{ m: 1, width: '36ch',borderRadius:"2" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-username">UserName</InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
        
            endAdornment={
              <InputAdornment position="end">
                <Icon icon="bi:person-fill" color="white" width="24" height="24" />
  
              </InputAdornment>
              
            }
            label="UserName"
          
          />
        </FormControl>
        <br></br>
        <br></br>
        <FormControl sx={{ m: 1, width: '36ch',borderRadius:"2" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
        
            endAdornment={
              <InputAdornment position="end">
                 <Icon icon="bx:bxs-lock-alt" color="white" width="24" height="24" />
              </InputAdornment>
              
            }
            label="password"
          />
        </FormControl>
        
      
        
        {/* <TextField
        
          first name
          id="outlined-adroment-password"
          
          label="username"
          Value=""
          size="small"
          color="primary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonOutlined />
              </InputAdornment>
            ),
          }}
          variant="standard"
      
          
        
          
          />
          
         
        
         */}
        
        
        {/* <TextField
          Password
          id="Password"
          label="Password"
          defaultValue=""
          size="small"
          color="primary"
          
        /> */}
        <p style={{color: '#33C9DC',marginLeft: '13rem',   fontSize: '74%'}}>Forgot Password?</p>
    
 
        <p style={{color:"#ffff", marginRight: '12rem', fontsize: "74%"}}> Remember me</p>
   
        <br></br>
        <Button class="button">Login</Button>
        </div>
        </Box>
        
       
        {/* <hr style={{ width: '25%',marginLeft: '4rem', marginTop: '3rem',
    marginBottom: '8px'
    }}></hr>
   
    
        <hr class="line2"></hr> */}
         <p style={{color:"#ffff"}}>or</p>
        <Grid container sx={{ color:"white"}} style={{marginTop:"2rem",marginRight:"2rem"}}>
         
         <hr style={{width:"25%",marginLeft:"4rem"}}></hr>
         
         <hr style={{width:"25%",marginRight:"4rem"}}></hr>
        </Grid>
         <Grid container sx={{color:"#33C9DC"}} style={{marginTop:"2rem",display:"flex",justifyContent:"space-around"}}>
        <FacebookRoundedIcon style={{marginLeft:"6rem",fontSize:"35px"}}/>
        <GoogleIcon  style={{marginRight:"6rem",fontSize:"35px"}}/>
        </Grid>
        <p style={{color:"gray",alignItems:"center",marginTop:"8rem"}}>Don't have an account? <span style={{color:"#33C9DC",marginLeft:"1rem"}}> Sign up</span></p>
        </div>
      
      
</div>
  
  );
}





export default Loginpage;