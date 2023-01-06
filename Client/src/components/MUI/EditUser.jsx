import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButonCmp from './ButonCmp';
import InputFir from './Input';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { addUser, AllUser, Editoring, Editorr } from '../../Services(api\'s)/api';
import CardCompback from './CardComp(back)';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchproduct } from '../../Store/productSlice';
import { useNavigate, useParams } from 'react-router-dom';

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


export default function EditUser() {
  const defaultValue = {
    title : '',
    caption: '',
    tags : '#'
  }



  const [open, setOpen] = React.useState(false);
  const [edits, setedits] = useState(defaultValue)
  const {data} = useSelector((state) => state.products)

  // const [refresh, setrefresh] = useState(false);
  // const [data , setdata] = useState({})
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };
  const [inpVal, setinpVal] = useState(defaultValue)

  function onchanger(e){
    setedits({ ...edits, [e.target.name] : e.target.value})
    // console.log(inpVal)
 }
 const navigate = useNavigate()
 const editpost = async ()=>{
   await Editoring(edits, id)
   navigate("/ir")
 }

//  const relod = ()=>{
//   window.location.reload()
//  }
 
 useEffect(()=>{
  loadPostdetails()
 }, [])
const {id} = useParams()
 async function loadPostdetails(){
  const res =  await Editorr(id)
  // console.log(res);
  setedits(res.data)
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
      <h1 className='text-center mt-5'>Edit the Post here</h1>
    <ButonCmp onClick={handleOpen} text={"Edit post"} className="mb-5 mt-2"/>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit from here 
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <InputFir mt={1} name="title" value={edits.title} label={"Title"} onChange={(e)=>onchanger(e)}/>
          <InputFir mt={2} name="caption" value={edits.caption} label={"Caption"} onChange={(e)=>onchanger(e)}/>
          <InputFir mt={2} name="tags" label={"Tags"} value={edits.tags} onChange={(e)=>onchanger(e)}/>
          <ButonCmp onClick={()=>{editpost() ; handleClose();}} text={"Edit"}/>         
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
