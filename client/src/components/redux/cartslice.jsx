import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload?.data;
      const { values } = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          quantity: values,
        });

      } 

        
      
    },
    remove:(state,action)=>
    {
      const id=action.payload._id
      const existingcart=items.find((item)=>item._id===_id);
      if(existingcart)
      {
        state.items=state.items.filter(item=>item._id!==_id);
       
      }
  
      
    },
    reset:(state)=>{
      state.items=[]
    }
   
  },
});

export const { addtocart,remove,reset} = cartSlice.actions;

export default cartSlice.reducer;
