import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchData=createAsyncThunk(
    'cart/fetchData',

async()=>{
    try{
      
        const response = await axios.get("/api/product/getall")
        console.log(response.data)
        console.log(`Response data: ${JSON.stringify(response.data)}`);
        return response.data;
    }
    catch(err)
    {
      console.log(err)
    }
}
);
export const adminSlice=createSlice({
    name:"admin",
    initialState:{
        pending: false,
    fulfilled: false,
    rejected: false,
    error: null,
        items:[]
    },
    reducers:{
       
            add: (state, action) => {
                const data = action.payload.data;
                const id = data.id;
                const response = state.items.find((item) => item.id === id);
              
                if (!response) {
                  state.items.push({
                    id: data.id,
                    name: data.name,
                    category: data.category,
                    price: data.price,
                    stock: data.count,
                  });
                }
            },
        remove:(state,action)=>{
            const id=action.payload._id
            const data=state.items.find((item)=>item.id===(id))
            if(data)
            {
                state.items=state.items.filter((item)=>item.id!==(id))
            }
        }
        
    },


    extraReducers:(builder)=>{
      
        builder
        .addCase(fetchData.pending, (state) => {
            state.pending = true;
            state.fulfilled = false;
            state.rejected = false;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.pending = false;
            state.fulfilled = true;
            state.rejected = false;
            if (action.payload && action.payload.data !== undefined) {
                state.items = action.payload.data;
              } else {
              state.items = [];
             
            }
         
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.pending = false;
            state.fulfilled = false;
            state.rejected = true;
            state.error = action.error.message;
          });

    }


})
export const {remove}=adminSlice.actions
export default adminSlice.reducer;