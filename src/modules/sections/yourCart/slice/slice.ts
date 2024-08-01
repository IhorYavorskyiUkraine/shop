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

export const fetchDeleteProduct = createAsyncThunk<
   { id: string; realId: string; color: string; size: string },
   { id: string; realId: string; color: string; size: string },
   { rejectValue: string }
>(
   "yourCartSlice/fetchDeleteProduct",
   async ({ id, realId, color, size }, { rejectWithValue }) => {
      try {
         const response = await axios.delete<{ id: string }>(
            `https://66a9f668613eced4eba6fbec.mockapi.io/cart/items/${id}`,
         );

         if (response.status !== 200) throw new Error("Error!");

         return { id, realId, color, size };
      } catch (error: any) {
         return rejectWithValue(error.message);
      }
   },
);

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
      deleteFromCart: (state, action) => {
         const { realId, color, size } = action.payload;
         console.log(action.payload);
         state.cart = state.cart.filter(
            product =>
               product.realId !== realId ||
               product.color !== color ||
               product.size !== size,
         );
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
      builder.addCase(fetchDeleteProduct.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      builder.addCase(
         fetchDeleteProduct.fulfilled,
         (
            state,
            action: PayloadAction<{
               id: string;
               realId: string;
               color: string;
               size: string;
            }>,
         ) => {
            state.status = Status.SUCCESS;
            const { id, color, size } = action.payload;
            state.cart = state.cart.filter(
               product =>
                  product.id !== id ||
                  product.color !== color ||
                  product.size !== size,
            );
         },
      );
      builder.addCase(fetchDeleteProduct.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

export const { addToCart, deleteFromCart } = yourCartSlice.actions;

export default yourCartSlice.reducer;
