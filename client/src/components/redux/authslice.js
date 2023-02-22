import { createSlice } from '@reduxjs/toolkit'
const initialState={
    currentUser:null,
    loading:false,
    error:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {

  },
  reducers: {
    loginStart:(state)=>{
        state.loading=true
    },
    loginSuccess:(state,action)=>{
        state.loading=false,
        state.currentUser=action.payload

    },
    loginFailed:(state)=>{
state.loading=false;
        state.error=true

    },
    logOut:(state)=>{
        state.currentUser=null,
        state.loading=false,
        state.error=alse

    }
 
  
  },
})

// Action creators are generated for each case reducer function
export const { loginFailed,logOut,loginSuccess,loginStart} = userSlice.actions

export default userSlice.reducer