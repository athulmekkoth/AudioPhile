import { createSlice } from '@reduxjs/toolkit'
const initialState={
    items:[],
    loading:false,
    error:false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {

  },
  reducers: {
    cartstart:(state)=>{
        state.loading=true
    },
  cartsuccess:(state,action)=>{
        state.loading=false,
        state.items=action.payload

    },
    cartFailed:(state)=>{
state.loading=false;
        state.error=true

    },
    
 
  
  },
})

// Action creators are generated for each case reducer function
export const { cartFailed,cartsuccess,cartStart} = cartSlice.actions

export default cartSlice.reducer