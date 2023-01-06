import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = {
    idle : "idle",
    loading : "loading",
    error : "error",
}

const ProductSlice = createSlice({
    name:  "product",
    initialState : {
        data : [],
        status : STATUSES,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchproduct.pending , (state, action)=>{
            state.status = STATUSES.loading
        });
        builder.addCase(fetchproduct.fulfilled , (state, action)=>{
            state.status = STATUSES.idle
            state.data = action.payload
        });
        builder.addCase(fetchproduct.rejected , (state, action)=>{
            state.status = STATUSES.error
        });
    },
})

const {reducer} = ProductSlice
export default reducer

export const fetchproduct = createAsyncThunk("products/fetch",async ()=>{
    const data = await fetch("http://localhost:5000/api/get")
    const products = await data.json();
    // console.log(products);
    return products;    
})








// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const STATUSES = {
//     idle : "idle",
//     loading : "loading",
//     error : "error",
// }

// const ProductSlice = createSlice({
//     name:  "product",
//     initialState : {
//         data : [],
//         status : STATUSES,
//     },
//     extraReducers : (builder) => {
//         builder.addCase(fetchproduct.pending , (state, action)=>{
//             state.status = STATUSES.loading
//         });
//         builder.addCase(fetchproduct.fulfilled , (state, action)=>{
//             state.status = STATUSES.idle
//             state.data = action.payload
//         });
//         builder.addCase(fetchproduct.rejected , (state, action)=>{
//             state.status = STATUSES.error
//         });
//     },
// })

// const {reducer} = ProductSlice
// export default reducer

// export const fetchproduct = createAsyncThunk("products/fetch",async ()=>{
//     const data = await fetch("https://fakestoreapi.com/products")
//     const products = await data.json();
//     // console.log(products);
//     return products;    
// })