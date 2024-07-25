import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Status } from "../../newArrivals/slice/slice";

type Review = {
   id: string;
   author: string;
   rating: number;
   review: string;
};

interface HappyCustomersState {
   reviews: Review[];
   status: Status;
   error: string | null;
}

export const fetchReviews = createAsyncThunk<
   Review[],
   void,
   { rejectValue: string }
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

const initialState: HappyCustomersState = {
   reviews: [],
   status: Status.LOADING,
   error: null,
};

const happyCustomersSlice = createSlice({
   name: "happyCustomers",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchReviews.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      builder.addCase(fetchReviews.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.reviews = action.payload;
      });
      builder.addCase(fetchReviews.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

export default happyCustomersSlice.reducer;
