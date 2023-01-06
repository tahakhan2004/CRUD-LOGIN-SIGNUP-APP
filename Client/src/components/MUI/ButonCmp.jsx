import React from 'react'
// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const ButonCmp = ({text , onClick , style , className}) => {
  return (
    <>  
    {/* STACK BY DEFAULT DISPLAY (FLEX) LATA HA  */}

    <Stack spacing={2} mt={1} justifyContent="center" direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button variant="contained" onClick={onClick} sx={style} className={className}>{text ? text : "Contained"}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
    </>
  )
}

export default ButonCmp