import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewArrives = createAsyncThunk(
   "globalSlice/fetchItems",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(
            "https://666a97c97013419182cff3dd.mockapi.io/newArrivals/items",
         );

         if (response.status !== 200) throw new Error("Error!");

         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

export const fetchTopSelling = createAsyncThunk(
   "globalSlice/fetchTopSelling",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(
            "https://666a9be47013419182d00996.mockapi.io/topSelling/items",
         );

         if (response.status !== 200) throw new Error("Error!");

         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

export const fetchReviews = createAsyncThunk(
   "globalSlice/fetchReviews",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(
            "https://66867ae883c983911b026d2f.mockapi.io/customer_reviews/reviews",
         );

         if (response.status !== 200) throw new Error("Error!");

         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   },
);

// export const fetchAddToCart = createAsyncThunk(
//    "globalSlice/fetchAddToCart",
//    async (obj, { rejectWithValue, dispatch }) => {
//       try {
//          const response = await axios.post(
//             "https://666a97c97013419182cff3dd.mockapi.io/newArrivals/cart",
//             obj,
//          );

//          if (response.status == !200) throw new Error("Error!");

//          dispatch(addToCart(obj));
//       } catch (error) {
//          return rejectWithValue(error.message);
//       }
//    },
// );

// export const fetchRemoveToCart = createAsyncThunk(
//    "globalSlice/fetchAddToCart",
//    async (id, { rejectWithValue }) => {
//       try {
//          const response = await axios.get(
//             `https://666a97c97013419182cff3dd.mockapi.io/newArrivals/cart/${id}`,
//          );

//          if (response.status == !200) throw new Error("Error!");

//          return response.data;
//       } catch (error) {
//          return rejectWithValue(error.message);
//       }
//    },
// );

const slice = createSlice({
   name: "globalSlice",
   initialState: {
      newArrivals: [],
      topSelling: [],
      reviews: [],
      status: "loading",
      error: null,
   },
   reducers: {
      addToCart(state, action) {},
      removeFromCart(state, action) {},
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
      builder.addCase(fetchTopSelling.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchTopSelling.fulfilled, (state, action) => {
         state.status = "success";
         state.topSelling = action.payload;
      });
      builder.addCase(fetchTopSelling.rejected, (state, action) => {
         state.status = "rejected";
         state.error = action.payload;
      });
      builder.addCase(fetchReviews.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchReviews.fulfilled, (state, action) => {
         state.status = "success";
         state.reviews = action.payload;
      });
      builder.addCase(fetchReviews.rejected, (state, action) => {
         state.status = "rejected";
         state.error = action.payload;
      });
   },
});

export const { addToCart, limitPlus } = slice.actions;

export default slice.reducer;
