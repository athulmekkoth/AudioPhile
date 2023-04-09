import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async (userId) => {
    const response = await axios.get(`/api/cart/get`);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    pending: false,
    fulfilled: false,
    rejected: false,
    error: null,
    subtotal:0,
    items: []
  },
  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload?.data;
      const { values } = action.payload;
      const existingItem = state.items?.find((item) => item.id === newItem._id);
      if (!existingItem) {
        state.items.push({
          id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          quantity: values,
          itemprice: newItem.price * values, // calculate total based on price and quantity
 
        });
        state.subtotal= state.subtotal + newItem.price * values


      }
    },
   
    increment:(state,action)=>{
      const data = action.payload
      const existingItem = state.items.find((item) => item.id === data);
      if(existingItem)
      {
        state.subtotal= state.subtotal - existingItem.quantity * existingItem.price
        existingItem.quantity++;
        existingItem.itemprice = existingItem.quantity * existingItem.price // calculate the updated total price based on the updated quantity
        state.subtotal= state.subtotal + existingItem.quantity * existingItem.price
      }
},
    decrement:(state,action)=>{
      const data = action.payload
      const existingItem = state.items.find((item) => item.id === data);
      if(existingItem && existingItem.quantity>0)
      { state.subtotal= state.subtotal - existingItem.quantity * existingItem.price

        existingItem.quantity--;
        existingItem.itemprice-=existingItem.price
        state.subtotal= state.subtotal + existingItem.quantity * existingItem.price
      }
    },
    
    remove:(state,action)=>
    {
      const data=action.payload
      const existingcart=state.items.find((item)=>item.id===data);
      if(existingcart)
      {
        state.items=state.items.filter(item=>item.id!==data);
        state.subtotal=state.subtotal-existingcart.itemprice;
       
      }
  
      
    },
    reset:(state)=>{
      state.items=[]
      state.subtotal=0
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.pending = true;
        state.fulfilled = false;
        state.rejected = false;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.pending = false;
        state.fulfilled = true;
        state.rejected = false;
        state.items = action.payload.items;
        state.subtotal = action.payload.total;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.pending = false;
        state.fulfilled = false;
        state.rejected = true;
        state.error = action.error.message;
      });
    }
});

export const { addtocart,remove,reset,increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;