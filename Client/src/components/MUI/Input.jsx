import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default function InputFir({label , onChange ,value , mt , name}) {
  return (
      <>
      <Stack mt={mt} alignItems={""} className="inputoo" mx={13}>
      <TextField id="outlined-basic" value={value} name={name} label={label || "Outlined"} variant="outlined" sx={{width:"40%"}} onChange={onChange}/>




      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </Stack>
      </>
  );
}