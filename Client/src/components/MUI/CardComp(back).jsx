import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { Deletor, Editorr } from '../../Services(api\'s)/api';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const CardCompback = ({Data}) => {
  const navigate = useNavigate()
  const editButtonhandler = () =>{
    axios.post("http://localhost:5000/api/tokenmidd", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }

    })
    .then((res)=>{
      console.log(res.data);
      navigate(`/edit/${Data._id}`)
    })
    .catch((err)=>{
      console.log(err);
      toast.error(err.response.data.message)
      navigate("/login")
    })
  }

  const DeleteButtonhandler = () =>{
    axios.post("http://localhost:5000/api/tokenmidd", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }

    })
    .then((res)=>{
      console.log(res.data);
      deletepost(Data._id)
    })
    .catch((err)=>{
      console.log(err);
      toast.error(err.response.data.message)
      navigate("/login")
    })
  }

  const deletepost = async (id) => {
    await Deletor(id)
    // await Editorr()
  }
  
  const relod = ()=>{
    window.location.reload()
   }
  return (
    <>

    <Card sx={{ maxWidth: 345 }} className="container cardcmppp">
    {/* <CardMedia
      component="img"
      height="140"
      image="/static/images/cards/contemplative-reptile.jpg"
      alt="green iguana"
    /> */}
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
        {Data.title}
      </Typography>
      <Typography variant="p" color="text.secondary" className='fs-6'>
       {Data.caption}
      </Typography>
      <Typography variant="h6" color="primary.light">
       #{Data.tags}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="large"  component={Link} onClick={editButtonhandler}>Edit</Button>
      <Button size="large" className='del-btn' onClick={()=>{relod(); DeleteButtonhandler();}}>Delete</Button>
    </CardActions>
  </Card>

  </>
  )
}

export default CardCompback