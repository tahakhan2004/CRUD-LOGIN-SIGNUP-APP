import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ButonCmp from './ButonCmp';
import { useDispatch } from 'react-redux';
import { add } from '../../Store/CartSlice';

export default function CardCmp({products}) {
  const dispatch = useDispatch()
  function addtocart(){
      dispatch(add(products))
  }
  return (
    <Card sx={{ maxWidth: 345 , mt:3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={products.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {products.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>


      <CardActions>
      <ButonCmp text={"Add to cart"} className={"addcart"} onClick={addtocart}/>
      </CardActions>
    </Card>
  );
}