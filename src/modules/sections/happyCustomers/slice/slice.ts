import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Status } from "../../newArrivals/slice/types";
import { HappyCustomersState, Review } from "./types";

// Asynchronous thunk action for fetching reviews
export const fetchReviews = createAsyncThunk<
   Review[], // Type of data returned on success
   void, // No input arguments
   { rejectValue: string } // Type of error message if rejected
>("happyCustomers/fetchReviews", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<Review[]>(
         "https://66867ae883c983911b026d2f.mockapi.io/customer_reviews/reviews",
      );

      if (response.status !== 200) throw new Error("Error!");

      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

// Initial state for the happyCustomers slice
const initialState: HappyCustomersState = {
   reviews: [], // Initial empty array of reviews
   status: Status.LOADING, // Initial status set to LOADING
   error: null, // No error initially
};

// Creating a slice for happyCustomers with reducers and extraReducers
const happyCustomersSlice = createSlice({
   name: "happyCustomers", // Name of the slice
   initialState, // Initial state
   reducers: {}, // No synchronous reducers defined
   extraReducers: builder => {
      // Handling different states of fetchReviews thunk
      builder.addCase(fetchReviews.pending, state => {
         state.status = Status.LOADING; // Set status to LOADING when request is pending
         state.error = null; // Clear any existing error
      });
      builder.addCase(fetchReviews.fulfilled, (state, action) => {
         state.status = Status.SUCCESS; // Set status to SUCCESS when request is successful
         state.reviews = action.payload; // Store the fetched reviews in state
      });
      builder.addCase(fetchReviews.rejected, (state, action) => {
         state.status = Status.REJECTED; // Set status to REJECTED when request fails
         state.error = action.payload ?? "Unknown error"; // Store the error message or default to "Unknown error"
      });
   },
});

export default happyCustomersSlice.reducer;
