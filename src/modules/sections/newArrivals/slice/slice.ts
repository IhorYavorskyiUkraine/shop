import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { NewArrivalsState, Product, Status } from "./types";

// Thunk to fetch new arrivals from the API
export const fetchNewArrives = createAsyncThunk<
   Product[], // The type of data we expect to receive
   void, // No arguments are needed
   { rejectValue: string } // Type for rejected value
>("newArrivals/fetchItems", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<Product[]>(
         "https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items",
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
const initialState: NewArrivalsState = {
   newArrivals: [], // Array to store new arrival products
   visibleData: 4, // Number of items initially visible
   status: Status.LOADING, // Initial status of the request
   error: null, // Error state, initially null
};

// Slice definition
const newArrivalsSlice = createSlice({
   name: "newArrivals", // Name of the slice
   initialState, // Initial state defined above
   reducers: {
      // Reducer to set the number of visible data items
      setVisibleData(state, action: PayloadAction<number>) {
         state.visibleData = action.payload; // Update visibleData with payload value
      },
   },
   extraReducers: builder => {
      builder
         // Handle pending state of fetchNewArrives thunk
         .addCase(fetchNewArrives.pending, state => {
            state.status = Status.LOADING; // Set status to loading
            state.error = null; // Clear previous errors
         })
         // Handle fulfilled state of fetchNewArrives thunk
         .addCase(fetchNewArrives.fulfilled, (state, action) => {
            state.status = Status.SUCCESS; // Set status to success
            state.newArrivals = action.payload; // Update newArrivals with fetched data
         })
         // Handle rejected state of fetchNewArrives thunk
         .addCase(fetchNewArrives.rejected, (state, action) => {
            state.status = Status.REJECTED; // Set status to rejected
            state.error = action.payload ?? "Unknown error"; // Set error message
         });
   },
});

export const { setVisibleData } = newArrivalsSlice.actions;

export default newArrivalsSlice.reducer;
