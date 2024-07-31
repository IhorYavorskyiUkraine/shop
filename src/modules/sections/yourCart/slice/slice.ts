import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, YourCartState } from "./types";
import { Status } from "../../newArrivals/slice/types";

export const fetchCartProducts = createAsyncThunk<
   CartProduct[],
   void,
   { rejectValue: string }
>("yourCartSlice/fetchCartProducts", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<CartProduct[]>(
         "https://66a9f668613eced4eba6fbec.mockapi.io/cart/items",
      );

      if (response.status !== 200) throw new Error("Error!");

      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

const initialState: YourCartState = {
   cart: [],
   status: Status.LOADING,
   error: null,
};

const yourCartSlice = createSlice({
   name: "yourCart",
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<CartProduct>) => {
         state.cart.push(action.payload);
      },
   },
   extraReducers: builder => {
      builder.addCase(fetchCartProducts.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.cart = action.payload;
      });
      builder.addCase(fetchCartProducts.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

export const { addToCart } = yourCartSlice.actions;

export default yourCartSlice.reducer;
