import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
   "globalSlice/fetchItems",
   async (_, rejectWithValue) => {
      try {
         const response = await axios.get(
            "https://666a97c97013419182cff3dd.mockapi.io/newArrivals/items",
         );
         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

export const fetchAddToCart = createAsyncThunk(
   "globalSlice/fetchAddToCart",
   async (obj, { rejectWithValue, dispatch }) => {
      try {
         const response = await axios.post(
            "https://666a97c97013419182cff3dd.mockapi.io/newArrivals/cart",
            obj,
         );
         dispatch(addToCart(obj));
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

export const fetchRemoveToCart = createAsyncThunk(
   "globalSlice/fetchAddToCart",
   async (id, rejectWithValue) => {
      try {
         const response = await axios.get(
            `https://666a97c97013419182cff3dd.mockapi.io/newArrivals/cart/${id}`,
         );
         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

const slice = createSlice({
   name: "globalSlice",
   initialState: {
      newArrivals: [],
      status: "loading",
      error: null,
   },
   reducers: {
      addToCart(state, action) {},
      removeFromCart(state, action) {},
   },
   extraReducers: builder => {
      builder.addCase(fetchItems.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchItems.fulfilled, (state, action) => {
         state.status = "success";
         state.newArrivals = action.payload;
      });
      builder.addCase(fetchItems.rejected, state => {
         state.status = "rejected";
         state.error = action.payload;
      });
   },
});

export const { addToCart } = slice.actions;

export default slice.reducer;
