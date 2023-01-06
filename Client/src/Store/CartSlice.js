import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers:{
        add(state , action){    
            state.push(action.payload)  
        },
        remove(){

        }
    }
})

const {actions, reducer} = cartSlice
const {add, remove } = actions;
export {
    add, 
    remove,
    reducer as cartSlice,
}
