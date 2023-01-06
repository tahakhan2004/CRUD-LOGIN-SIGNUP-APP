// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const STATUSES = {
//     idle : "idle",
//     loading : "loading",
//     error : "error",
// }

// const AuthSlice = createSlice({
//     name:  "product",
//     initialState : {
//         data : [],
//         status : STATUSES,
//     },
//     extraReducers : (builder) => {
//         builder.addCase(fetchdata.pending , (state, action)=>{
//             state.status = STATUSES.loading
//         });
//         builder.addCase(fetchdata.fulfilled , (state, action)=>{
//             state.status = STATUSES.idle
//             state.data = action.payload
//         });
//         builder.addCase(fetchdata.rejected , (state, action)=>{
//             state.status = STATUSES.error
//         });
//     },
// })

// const {reducer} = AuthSlice
// export default reducer

// export const fetchdata = createAsyncThunk("datum/fetch", async ()=>{
//     const data = await fetch("http://localhost:5000/api/login")
//     const products = await data.json();
//     // console.log(products);
//     return products;    
// })