import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
   "productAbout/fetchProduct",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await axios.get(
            `https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items/${id}`,
         );

         if (response.status !== 200) throw new Error("Error!");

         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

const productAboutSlice = createSlice({
   name: "productAbout",
   initialState: {
      product: null,
      selectedSize: "",
      color: "",
      colorList: [],
      quantity: 0,
      activeImage: 0,
      activeIndex: 0,
      activeTab: "productDetails",
      status: "loading",
      error: null,
   },
   reducers: {
      setSelectedSize(state, action) {
         state.selectedSize = action.payload;
      },
      setColor(state, action) {
         state.color = action.payload;
      },
      setColorList(state, action) {
         state.colorList = action.payload;
      },
      setQuantity(state, action) {
         state.quantity = action.payload;
      },
      setActiveImage(state, action) {
         state.activeImage = action.payload;
      },
      setActiveIndex(state, action) {
         state.activeIndex = action.payload;
      },
      setActiveTab(state, action) {
         state.activeTab = action.payload;
      },
      addToCart(state, action) {},
      removeFromCart(state, action) {},
   },
   extraReducers: builder => {
      builder.addCase(fetchProduct.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
         state.status = "success";
         state.product = action.payload;
      });
      builder.addCase(fetchProduct.rejected, (state, action) => {
         state.status = "rejected";
         state.error = action.payload;
      });
   },
});

export const {
   setSelectedSize,
   setColor,
   setColorList,
   setQuantity,
   setActiveImage,
   setActiveIndex,
   setActiveTab,
   addToCart,
   removeFromCart,
} = productAboutSlice.actions;

export const selectorProductAbout = state => state.productAboutSlice;

export default productAboutSlice.reducer;
