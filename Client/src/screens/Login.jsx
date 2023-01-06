
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
// import { LoginUser, SignupUser } from '../Services(api's)/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../Store/AuthSlice';
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

export default function LogIn() {
    const navigate = useNavigate()
    const {control , handleSubmit} = useForm({
      defaultValues:{
        email:"",
        password:"",
      }
    })


    const loginhandler = (obj)=>{
      console.log(obj);
      const {email, password} = obj || {}
      const objtosend = {
        email,
        password,
      }

    axios.post("http://localhost:5000/api/login", objtosend)
    .then((res)=>{
      console.log(res.data);
      toast.success(res.data.message)
      navigate("/ir")
      localStorage.setItem("user", res.data.data)
      localStorage.setItem("token" ,res.data.token)
    })
    .catch((err)=>{
      console.log(err);
      const errhand = err.response.data.message
      toast.error(errhand)
    })
    }

//  const LoginUser = async (data) =>{
//     try{
//       const response =  await axios.post("http://localhost:5000/api/login", data)  
//       const user = response.data.message;
//       const Token = response.data.token; 
//       // console.log(Token); 
//       if(Token){
//         localStorage.setItem("token", Token)
//         alert(user)
//         navigate("/ir")
//       }else{
//         alert(user)
//         navigate("/login")
//       }

//     }catch(err){
//         console.log("Error in calling loginUser api" , err);
//     }
//   }

  function tosognup(){
    navigate("/")
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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(loginhandler)} noValidate sx={{ mt: 1 }}>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Name"
              name="name"
            //   autoComplete="email"
              autoFocus
            /> */}
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
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={tosognup} className="link" variant="body2">
                  {"Don't have an account? Sign Up"}
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