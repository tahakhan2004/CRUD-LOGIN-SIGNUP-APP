// import logo from './logo.svg';

import { Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import EditUser from './components/MUI/EditUser';
import LogIn from './screens/Login';
import Company from './screens/compant';
import Ir from './screens/IR';
// import Mobility from './screens/Mob';
// import Newsroom from './screens/News';
// import Sustainblity from './screens/sustainble';
import {Toaster} from "react-hot-toast"
import ProtectedRoute from './protectedRoutes';
// import StoreApp from './components/Store App';

function App() {
  return(
  <>
   {/* <Typography variant='h2' component="a" sx={{display:{xs:"flex", md:"none"}}}>
    Hello World
   </Typography> */}

   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<LogIn/>} />

   <Route element={<ProtectedRoute/>}>
   <Route path="/ir" element={<Ir />} />  
   </Route>
   
   <Route path="/company" element={<Company />} />  
   {/* <Route path="/news" element={<Newsroom />} />   */}
   {/* <Route path="/mobility" element={<Mobility />} />  */}
   {/* <Route path="/sustain" element={<Sustainblity />} />   */}
   <Route path="/edit/:id" element={<EditUser />} />
   </Routes>

   <Toaster
  position="top-center"
  reverseOrder={false}
/>

  </>
  )
}

export default App;
