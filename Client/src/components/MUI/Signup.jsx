import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { SignupUser } from '../../Services(api\'s)/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../../Store/AuthSlice';
import axios from 'axios';
import {useForm , Controller} from "react-hook-form";
import {toast} from "react-hot-toast"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate() 
  const {control , handleSubmit} = useForm({
    defaultValues:{
      name: "",
      email:"",
      password:"",
      phoneNum:"",
    }
  })
  const signuphandler =  (obj) => {
    const {name, email, password, phoneNum} = obj
    const objtosendd= {
      name,
      email,
      password,
      phoneNum,
    }
    axios.post("http://localhost:5000/api/signup", objtosendd)
    .then((res)=>{
      console.log(res.data);
      toast.success(res.data.message)
      navigate("/login")

    })
    .catch((err)=>{
      console.log(err);
      toast.error(err.response.data.message)
    })

  };
  //  await SignupUser(signs)
  // };

  
 const SignupUser = async (data) =>{
    // try{
    //  const response = await axios.post("http://localhost:5000/api/signup", data)  
    // //  const dataa = await response
    // //  console.log(response.data.message);
    // const user = response.data.message;
    // const stat = response.data.status
    // if(user === "USer already exist" || stat === true){
    //   alert(user)
    //   navigate("/login")
    // }else{
    //   navigate("/")
    // }
     
    // }catch(err){
    //     console.log("Error in calling signupUser api" , err);
    // }
  }

  function tologin(){
    navigate("/login")
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(signuphandler)} noValidate sx={{ mt: 1 }}>
              
            <Controller name="name" control={control} 
               render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value} label={"User Name"}   margin="normal"
                required
                fullWidth
                id="name"
              autoFocus
              />
              )}
            />

<Controller  name="email" control={control} 
               render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value}  required
                fullWidth
                id="email"
                label="Email Address"
                margin="normal"
                autoComplete="email"
                autoFocus
                type="email"
                />
              )}
            />

          <Controller  name="password" control={control} 
               render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value}  required
                fullWidth
                id="password"
                label="Password"
                margin="normal"
                autoComplete="current-password"
                autoFocus
                type="password"
                />
              )}
            />

            
          <Controller  name="phoneNum" control={control} 
               render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value}  required
                fullWidth
                id="phoneNum"
                label="Phone Number"
                margin="normal"
                autoFocus
                type="number"
                />
              )}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={tologin} className="link" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}