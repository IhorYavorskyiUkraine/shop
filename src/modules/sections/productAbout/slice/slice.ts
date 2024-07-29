import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";

import {
   ActiveTab,
   FetchProductArgs,
   ProductAboutState,
   SelectedFilter,
   Sizes,
} from "./types";
import { Product, Status } from "../../newArrivals/slice/types";
import { Review } from "../../newArrivals/slice/types";

// Async thunk to fetch product details by ID
export const fetchProduct = createAsyncThunk<
   Product, // Type of data to return on success
   FetchProductArgs, // Type of arguments for the thunk
   { rejectValue: string } // Type of error message for rejection
>("productAbout/fetchProduct", async ({ id }, { rejectWithValue }) => {
   try {
      const response = await axios.get<Product>(
         `https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items/${id}`,
      );

      if (response.status !== 200) throw new Error("Error!");

      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

// Async thunk to post a review and update product data
export const postFetchReview = createAsyncThunk<
   Review,
   FetchProductArgs,
   { rejectValue: string }
>("productAbout/postReview", async ({ id, review }, { rejectWithValue }) => {
   try {
      // Fetch the current product data
      const response = await axios.get(
         `https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items/${id}`,
      );

      if (response.status !== 200) throw new Error("Error!");

      const product = response.data;

      // Add the new review to the product's reviews
      product.reviews.push(review);

      // Update the product data with the new review
      const updateResponse = await axios.put(
         `https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items/${id}`,
         product,
      );

      if (updateResponse.status !== 200)
         throw new Error("Failed to write a review...");

      return updateResponse.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

// Initial state for the productAbout slice
const initialState: ProductAboutState = {
   product: null, // Product details
   selectedSize: "s", // Default size
   color: "", // Selected color
   colorList: [], // List of available colors
   quantity: 0, // Quantity of the product
   activeImage: 0, // Index of the currently displayed image
   activeIndex: 0, // Index for other UI components
   activeTab: "Rating & Reviews", // Default active tab
   selectedFilter: "latest", // Default filter for sorting
   formStatus: false, // Status of the review form
   formRating: 0, // Rating given in the review form
   formAuthor: "", // Author of the review
   formText: "", // Text of the review
   status: Status.LOADING, // Status of the data fetching
   error: null, // Error message, if any
};

// Slice to manage product-related state
const productAboutSlice = createSlice({
   name: "productAbout",
   initialState,
   reducers: {
      // Update the selected size
      setSelectedSize(state, action: PayloadAction<Sizes>) {
         state.selectedSize = action.payload;
      },
      // Update the selected color
      setColor(state, action: PayloadAction<string>) {
         state.color = action.payload;
      },
      // Update the list of available colors
      setColorList(state, action: PayloadAction<string[]>) {
         state.colorList = action.payload;
      },
      // Update the quantity of the product
      setQuantity(state, action: PayloadAction<number>) {
         state.quantity = action.payload;
      },
      // Update the index of the currently displayed image
      setActiveImage(state, action: PayloadAction<number>) {
         state.activeImage = action.payload;
      },
      // Update the index for other UI components
      setActiveIndex(state, action: PayloadAction<number>) {
         state.activeIndex = action.payload;
      },
      // Update the currently active tab
      setActiveTab(state, action: PayloadAction<ActiveTab>) {
         state.activeTab = action.payload;
      },
      // Update the selected filter for sorting
      setSelectedFilter(state, action: PayloadAction<SelectedFilter>) {
         state.selectedFilter = action.payload;
      },
      // Update the form status (submitted/not submitted)
      setFormStatus(state, action: PayloadAction<boolean>) {
         state.formStatus = action.payload;
      },
      // Update the review text
      setFormText(state, action: PayloadAction<string>) {
         state.formText = action.payload;
      },
      // Update the review rating
      setFormRating(state, action: PayloadAction<number>) {
         state.formRating = action.payload;
      },
      // Update the review author's name
      setFormAuthor(state, action: PayloadAction<string>) {
         state.formAuthor = action.payload;
      },
      // Add the review to the product's reviews
      postReview(state, action) {
         state.product?.reviews.push(action.payload);
      },
      // Placeholder for adding product to cart
      addToCart(state, action) {},
      // Placeholder for removing product from cart
      removeFromCart(state, action) {},
   },
   extraReducers: builder => {
      // Handle pending state of fetchProduct
      builder.addCase(fetchProduct.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      // Handle successful fetchProduct
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.product = action.payload;
      });
      // Handle failed fetchProduct
      builder.addCase(fetchProduct.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
      // Handle pending state of postFetchReview
      builder.addCase(postFetchReview.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      // Handle successful postFetchReview
      builder.addCase(postFetchReview.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
      });
      // Handle failed postFetchReview
      builder.addCase(postFetchReview.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

// Export action creators for state updates
export const {
   setSelectedSize,
   setColor,
   setColorList,
   setQuantity,
   setActiveImage,
   setActiveIndex,
   setActiveTab,
   setSelectedFilter,
   setFormStatus,
   setFormText,
   setFormRating,
   setFormAuthor,
   postReview,
   addToCart,
   removeFromCart,
} = productAboutSlice.actions;

// Selector to get productAbout state from the Redux store
export const selectorProductAbout = (state: RootState) =>
   state.productAboutSlice;

export default productAboutSlice.reducer;
