import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButonCmp from './ButonCmp';
import InputFir from './Input';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { addUser, AllUser } from '../../Services(api\'s)/api';
import CardCompback from './CardComp(back)';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchproduct } from '../../Store/productSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4  ,
  
};


export default function BasicModalxx() {
  const defaultValue = {
    title : '',
    caption: '',
    tags : '#'
  }



  const [open, setOpen] = React.useState(false);
  // const [refresh, setrefresh] = useState(false);
  // const [data , setdata] = useState({})
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };
  const [inpVal, setinpVal] = useState(defaultValue)
  const navigate = useNavigate()

  const postButtonhandler = () =>{
    axios.post("http://localhost:5000/api/tokenmidd", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }

    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
      toast.error(err.response.data.message)
      navigate("/login")
    })
  }

function onchanger(e){
    setinpVal({ ...inpVal, [e.target.name] : e.target.value})
    // console.log(inpVal)
 }

 const userAdd = async ()=>{
   await addUser(inpVal)
 }

 const relod = ()=>{
  window.location.reload()
 }
//  const geterdata= async ()=>{
//     // let response  = await AllUser()
//     // console.log(response.data.postss);
//     // setdata(response.data.postss);
//     setrefresh(true)

//  }



  return (
    <>

    <div>
      {/* <Button onClick={handleOpen} className>Open modal</Button> */}
    <ButonCmp onClick={()=>{handleOpen(); postButtonhandler();}} text={"Create a post"} className="mb-5 mt-2"/>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post from here 
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <InputFir mt={1} name="title" label={"Title"} onChange={(e)=>onchanger(e)}/>
          <InputFir mt={2} name="caption" label={"Caption"} onChange={(e)=>onchanger(e)}/>
          <InputFir mt={2} name="tags" label={"Tags"} onChange={(e)=>onchanger(e)}/>
          <ButonCmp onClick={()=>{userAdd() ; handleClose(); relod()}} text={"Post"}/>         
          {/* <InputFir mt={1} label={""}/> */}
        </Box>
      </Modal>

    </div>
    </>
  );
}





// data.map((products , index) =>{
//   return(
//     <Grid item md={4} lg={3} key={index}>
//     <CardCompback Data={products}/>
//     </Grid>
//   )
// })  