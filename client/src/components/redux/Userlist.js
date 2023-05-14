import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchUData = createAsyncThunk(
  'list/fetchUData',
  async () => {
    try {
      const response = await axios.get('/api/auth/getuser');
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const UserlistSlice = createSlice({
  name: 'list',
  initialState: {
    items: [],
    pending: false,
    fulfilled: false,
    rejected: false,
    error: null,
  },
  reducers: {
    remove: (state, action) => {
      console.log(action);
  
   
      const exist = state.items.find((item) => item.id === id);
      if (exist) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUData.pending, (state, action) => {
        state.pending = true;
        state.fulfilled = false;
        state.rejected = false;
      })
      .addCase(fetchUData.fulfilled, (state, action) => {
        state.pending = false;
        state.fulfilled = true;
        state.rejected = false;
        if (action.payload !== undefined) {
          state.items = action.payload.response;
        }
      })
      .addCase(fetchUData.rejected, (state, action) => {
        state.pending = false;
        state.fulfilled = false;
        state.rejected = true;
      });
  },
});

export const { remove } = UserlistSlice.actions;

export default UserlistSlice.reducer;
