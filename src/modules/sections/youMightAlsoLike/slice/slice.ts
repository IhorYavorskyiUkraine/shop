import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { YouMightAlsoLikeState } from "./types";
import { Product, Status } from "../../newArrivals/slice/types";

// Async thunk to fetch youMightAlsoLikeSlice products from API
export const fetchYouMightAlsoLike = createAsyncThunk<
   Product[], // Type of data to return on success
   void, // No arguments needed
   { rejectValue: string } // Type of error message for rejection
>("youMightAlsoLike/fetchYouMightAlsoLike", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<Product[]>(
         "https://66a8e124e40d3aa6ff59c77e.mockapi.io/youMightAlsoLike/items",
      );

      if (response.status !== 200) throw new Error("Error!");

      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

// Initial state for the youMightAlsoLikeSlice slice
const initialState: YouMightAlsoLikeState = {
   youMightAlsoLike: [], // Array to store youMightAlsoLikeSlice products
   status: Status.LOADING, // Status of the data fetching
   error: null, // Error message, if any
};

// Slice to manage youMightAlsoLikeSlice products state
const youMightAlsoLikeSlice = createSlice({
   name: "youMightAlsoLike",
   initialState,
   reducers: {},
   extraReducers: builder => {
      // Handle pending state of fetchYouMightAlsoLike
      builder.addCase(fetchYouMightAlsoLike.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      // Handle successful fetchYouMightAlsoLike
      builder.addCase(fetchYouMightAlsoLike.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.youMightAlsoLike = action.payload;
      });
      // Handle failed fetchYouMightAlsoLike
      builder.addCase(fetchYouMightAlsoLike.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

export default youMightAlsoLikeSlice.reducer;
