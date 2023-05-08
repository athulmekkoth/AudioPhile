import { createSlice } from '@reduxjs/toolkit'

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
        add(state,action)=>{

        }
    }
})