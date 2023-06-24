import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import produce from 'immer'
export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async () => {
    try{
      console.log(`Fetching cart data for user with id `);
      const response = await axios.get(`/api/cart/get`);
      console.log(`Response status: ${response.status}`);
      console.log(`Response data: ${JSON.stringify(response.data)}`);
    return response.data;
    }
    catch(err)
    {
      console.log(err)
    }
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
      const existingItem = state.items?.find((item) => item.product === newItem._id);
      if (!existingItem) {
        state.items.push({
          product: newItem._id,
          name: newItem.name,
          price: newItem.price,
          quantity: values,
          photos:newItem.photos,
          itemprice: newItem.price * values, // calculate total based on price and quantity
 
        });
        state.subtotal= state.subtotal + newItem.price * values


      }
    },
   
    increment:(state,action)=>{
      const data = action.payload
      const existingItem = state.items.find((item) => item.product === data);
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
      const existingItem = state.items.find((item) => item.product === data);
      if(existingItem)
      {
        state.subtotal= state.subtotal - existingItem.quantity * existingItem.price
        existingItem.quantity--;
       
        existingItem.itemprice = existingItem.quantity * existingItem.price // calculate the updated total price based on the updated quantity
        state.subtotal= state.subtotal + existingItem.quantity * existingItem.price
      }
    },
    remove: (state, action) => {
      const id = action.payload;
      console.log(id)
      const index = state.items.findIndex((item) => item.product === id);
      console.log(index)
      if (index !== -1) {
        const existingItem = state.items[index];
        // use produce function to safely modify the state object
        return produce(state, (draftState) => {
          draftState.items.splice(index, 1);
          draftState.subtotal -= existingItem.itemprice;
        });
      }
      // if id not found, return the original state object
      return state;
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
        if (action.payload && action.payload.items !== undefined) {
          state.items = action.payload.items;
          state.subtotal = action.payload.total;
        } else {
          state.items = [];
          state.subtotal = 0;
        }
     
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