import { createSlice } from '@reduxjs/toolkit'
export const fetchData=createAsyncThunk(
    'cart/fetchData',
    async()=>{
        try{
      const response=await  axios.get("/api/auth/getuser")
        return response.data
        }
        catch(err){
            console.log(err)
        }
    }

)
export const list=createSlice({
    name:lsit,
    initialState:{
        items:[],
        pending:false,
        fullfilled:false,
        rejected: false,
    error: null,
    },
    reducers:{
      
    }
    ,
    extraReducers:(builder)=>{
        builder.
        addCase(fetchData.pending,(state,action)=>{
            state.pending=true;
            state.fullfilled=false,
            state.rejected=false;

        })
        addCase(fetchData.fullfilled,(state,action)=>{
            state.pending=false;
            state.fullfilled=false,
            state.rejected=false;
            if(action.payload!== undefined){
            state.items=action.payload.response;
            }

        })
        addCase(fetchData.rejected,(state,action)=>{
            state.pending=false;
            state.fullfilled=false,
            state.rejected=true;
        })
    }
})