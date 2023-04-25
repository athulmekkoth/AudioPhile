import { createSlice } from '@reduxjs/toolkit'
const initialState={
    currentUser:null,
    isAdmin:false,
    loading:false,
    error:false
}

export const userSlice = createSlice({
  name: 'user',
   initialState: initialState,
  reducers: {
    loginStart:(state)=>{
        state.loading=true
    },
     loginSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload
      state.isAdmin = action.payload.isadmin
    },
    loginFailed:(state)=>{
state.loading=false;
        state.error=true

    },

logOut: (state) => {
    state.currentUser = null
    state.loading = false
    state.error = false
    state.isAdmin = false
  },
},
})

// Action creators are generated for each case reducer function
export const { loginFailed,logOut,loginSuccess,loginStart} = userSlice.actions

export default userSlice.reducer