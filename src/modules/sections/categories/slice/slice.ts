import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState, Filters } from "./types";
import { Product, Status } from "../../newArrivals/slice/types";
import axios from "axios";

export const fetchCategoriesList = createAsyncThunk<
   Product[], // The type of data we expect to receive
   { link: string }, // No arguments are needed
   { rejectValue: string } // Type for rejected value
>(
   "categoriesSlice/fetchCategoriesList",
   async ({ link }, { rejectWithValue }) => {
      try {
         const response = await axios.get<Product[]>(`${link}`);

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
   },
);

// Initial state of the slice
const initialState: CategoriesState = {
   categoriesList: [], // Array to store new arrival products
   filters: {
      category: "",
      price: [0, 250],
      color: "",
      size: "",
      dressStyle: "",
   },
   status: Status.LOADING, // Initial status of the request
   error: null, // Error state, initially null
};

// Slice definition
const categoriesSlice = createSlice({
   name: "Categories", // Name of the slice
   initialState, // Initial state defined above
   reducers: {
      setFilters(state, action: PayloadAction<Filters>) {
         state.filters = action.payload;
      },
   },
   extraReducers: builder => {
      builder
         // Handle pending state of fetchNewArrives thunk
         .addCase(fetchCategoriesList.pending, state => {
            state.status = Status.LOADING; // Set status to loading
            state.error = null; // Clear previous errors
         })
         // Handle fulfilled state of fetchNewArrives thunk
         .addCase(fetchCategoriesList.fulfilled, (state, action) => {
            state.status = Status.SUCCESS; // Set status to success
            state.categoriesList = action.payload; // Update newArrivals with fetched data
         })
         // Handle rejected state of fetchNewArrives thunk
         .addCase(fetchCategoriesList.rejected, (state, action) => {
            state.status = Status.REJECTED; // Set status to rejected
            state.error = action.payload ?? "Unknown error"; // Set error message
         });
   },
});

export const { setFilters } = categoriesSlice.actions;

export default categoriesSlice.reducer;
