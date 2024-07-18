import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewArrives = createAsyncThunk(
   "newArrivals/fetchItems",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(
            "https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items",
         );

         if (response.status !== 200) throw new Error("Error!");

         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

const newArrivalsSlice = createSlice({
   name: "newArrivals",
   initialState: {
      newArrivals: [],
      visibleData: 4,
      status: "loading",
      error: null,
   },
   reducers: {
      setVisibleData(state, action) {
         state.visibleData = action.payload;
      },
   },
   extraReducers: builder => {
      builder.addCase(fetchNewArrives.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchNewArrives.fulfilled, (state, action) => {
         state.status = "success";
         state.newArrivals = action.payload;
      });
      builder.addCase(fetchNewArrives.rejected, (state, action) => {
         state.status = "rejected";
         state.error = action.payload;
      });
   },
});

export const { setVisibleData } = newArrivalsSlice.actions;

export default newArrivalsSlice.reducer;
