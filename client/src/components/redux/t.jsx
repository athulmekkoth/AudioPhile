export  const fetchdata=createAsyncThunk('cart/getcart',async()=>{
    try{
      const response=await axios.get("api/cart/get")
     return response.data
    }
    catch(err)
    {
      console.log(err)
    }
  })
    extraReducers: (builder) => {
      builder
        .addCase(fetchdata.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchdata.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchdata.rejected, (state) => {
          state.loading = false;
        });
    },