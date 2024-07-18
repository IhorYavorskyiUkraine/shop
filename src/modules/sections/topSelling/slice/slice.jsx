import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopSelling = createAsyncThunk(
   "topSelling/fetchTopSelling",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(
            "https://666a9be47013419182d00996.mockapi.io/top_selling/items",
         );

         if (response.status !== 200) throw new Error("Error!");

         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

const topSellingSlice = createSlice({
   name: "topSelling",
   initialState: {
      topSelling: [],
      status: "loading",
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchTopSelling.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchTopSelling.fulfilled, (state, action) => {
         state.status = "success";
         state.topSelling = action.payload;
      });
      builder.addCase(fetchTopSelling.rejected, (state, action) => {
         state.status = "rejected";
         state.error = action.payload;
      });
   },
});

export default topSellingSlice.reducer;
