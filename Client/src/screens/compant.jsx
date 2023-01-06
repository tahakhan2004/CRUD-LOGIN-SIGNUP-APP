import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButonCmp from '../components/MUI/ButonCmp'
import CardCmp from '../components/MUI/CardCmp'
import NavBarr from '../components/MUI/Nvabar'
import { fetchproduct } from '../Store/productSlice'

const Company = () => {
  // const selector = useSelector((state) => state.userreducer)
  // console.log(selector.users);
  const {data , status} = useSelector((state) => state.products)
  console.log("home data" , data);

 

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchproduct())
  }, [])

  if(status === "loading"){
    return <div className="loader"></div>
  }
  return (
    <>
    <NavBarr />
    {/* <Typography variant='h1'>Company page</Typography> */}
    <Box sx={{
      px: '25px'
    }}>

    <Grid container columnSpacing={3}>
    {/* <Grid item lg={4}>
    <CardCmp />
    </Grid>
    <Grid item md={4}>
    <CardCmp />
    </Grid>
    <Grid item lg={4}>
    <CardCmp />
    </Grid>
    <Grid item lg={4}>  
    <CardCmp />
    </Grid>  */}

    {data && data.map((products , index) =>{
      return(
        <Grid item md={4} key={index}>
        <CardCmp products={products}/>
        </Grid>
      )
    })}

    </ Grid>
    </Box>
    {/* <ButonCmp text={"Company"}/>s */}
    </>
  )
}

export default Company  