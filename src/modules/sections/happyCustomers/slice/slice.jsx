import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
   "happyCustomers/fetchReviews",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(
            "https://66867ae883c983911b026d2f.mockapi.io/customer_reviews/reviews",
         );

         if (response.status !== 200) throw new Error("Error!");

         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

const happyCustomersSlice = createSlice({
   name: "happyCustomers",
   initialState: {
      reviews: [],
      status: "loading",
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchReviews.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchReviews.fulfilled, (state, action) => {
         state.status = "success";
         state.reviews = action.payload;
      });
      builder.addCase(fetchReviews.rejected, (state, action) => {
         state.status = "rejected";
         state.error = action.payload;
      });
   },
});

export default happyCustomersSlice.reducer;
