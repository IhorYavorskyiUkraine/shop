import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
   Product,
   Status,
} from "../../../modules/sections/newArrivals/slice/types";
import { SaleProductsState } from "./types";

// Thunk to fetch new arrivals from the API
export const fetchSaleProducts = createAsyncThunk<
   Product[], // The type of data we expect to receive
   void, // No arguments are needed
   { rejectValue: string } // Type for rejected value
>("saleProducts/fetchItems", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<Product[]>(
         "https://66bc550724da2de7ff6a0f6d.mockapi.io/on_sale/items",
      );

      if (response.status !== 200) {
         throw new Error("Failed to fetch data.");
      }

      return response.data;
   } catch (error: any) {
      if (error.response && error.response.data) {
         return rejectWithValue(
            error.response.data.message || "Failed to fetch data.",
         );
      }
      return rejectWithValue(error.message || "Failed to fetch data.");
   }
});

// Initial state of the slice
const initialState: SaleProductsState = {
   saleProducts: [], // Array to store new arrival products
   status: Status.LOADING, // Initial status of the request
   error: null, // Error state, initially null
};

// Slice definition
const saleProductsSlice = createSlice({
   name: "saleProducts", // Name of the slice
   initialState, // Initial state defined above
   reducers: {},
   extraReducers: builder => {
      builder
         // Handle pending state of fetchNewArrives thunk
         .addCase(fetchSaleProducts.pending, state => {
            state.status = Status.LOADING; // Set status to loading
            state.error = null; // Clear previous errors
         })
         // Handle fulfilled state of fetchNewArrives thunk
         .addCase(fetchSaleProducts.fulfilled, (state, action) => {
            state.status = Status.SUCCESS; // Set status to success
            state.saleProducts = action.payload; // Update newArrivals with fetched data
         })
         // Handle rejected state of fetchNewArrives thunk
         .addCase(fetchSaleProducts.rejected, (state, action) => {
            state.status = Status.REJECTED; // Set status to rejected
            state.error = action.payload ?? "Unknown error"; // Set error message
         });
   },
});

export default saleProductsSlice.reducer;
