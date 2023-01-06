import { Grid, Stack, Typography } from '@mui/material'
import axios from 'axios'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButonCmp from '../components/MUI/ButonCmp'
import CardCompback from '../components/MUI/CardComp(back)'
import BasicModalxx from '../components/MUI/Modal'
import NavBarr from '../components/MUI/Nvabar'
import { fetchproduct } from '../Store/productSlice'


const Ir = () => {
  const {data , status} = useSelector((state) => state.products)
  console.log(data);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(fetchproduct())
  }, [])

  
  // useEffect(()=>{

  //   const token = localStorage.getItem("token")
  //   if(token){
  //     navigate("/ir")
  //     // const user = jwt.decode(token)
  //   }else{
  //       localStorage.removeItem("token")
  //       navigate("/login")
  //     }
  // }, [])

  if(status === "loading"){
    return <Stack justifyContent={"center"} alignItems={"center"} direction={"row"} ><div className="lds-spinner "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Stack>
  }

  return (
    <>
    <NavBarr />
    <Typography variant='h1' className='text-center mt-2'>Welcome</Typography>
    {/* <ButonCmp text={"Create a post"}/> */}


    <BasicModalxx/>

    <Grid container columnSpacing={0} rowSpacing={4} mb={4}>
    {data.map((products , index) =>{
      return(
        <Grid item md={4} lg={4} xl={3} key={index}>
        <CardCompback Data={products}/>
        </Grid>
      )
    })}

    </ Grid>
    </>
  )
}

export default Ir