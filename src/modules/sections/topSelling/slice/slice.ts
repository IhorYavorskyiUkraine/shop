import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TopSellingState } from "./types";
import { Product, Status } from "../../newArrivals/slice/types";

// Async thunk to fetch top-selling products from API
export const fetchTopSelling = createAsyncThunk<
   Product[], // Type of data to return on success
   void, // No arguments needed
   { rejectValue: string } // Type of error message for rejection
>("topSelling/fetchTopSelling", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<Product[]>(
         "https://666a9be47013419182d00996.mockapi.io/top_selling/items",
      );

      if (response.status !== 200) throw new Error("Error!");

      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

// Initial state for the top-selling slice
const initialState: TopSellingState = {
   topSelling: [], // Array to store top-selling products
   visibleData: 4, // Number of products to show initially
   status: Status.LOADING, // Status of the data fetching
   error: null, // Error message, if any
};

// Slice to manage top-selling products state
const topSellingSlice = createSlice({
   name: "topSelling",
   initialState,
   reducers: {
      // Action to update the number of visible products
      setVisibleData(state, action: PayloadAction<number>) {
         state.visibleData = action.payload;
      },
   },
   extraReducers: builder => {
      // Handle pending state of fetchTopSelling
      builder.addCase(fetchTopSelling.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      // Handle successful fetchTopSelling
      builder.addCase(fetchTopSelling.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.topSelling = action.payload;
      });
      // Handle failed fetchTopSelling
      builder.addCase(fetchTopSelling.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

export const { setVisibleData } = topSellingSlice.actions;

export default topSellingSlice.reducer;
