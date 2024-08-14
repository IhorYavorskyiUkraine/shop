import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState, Filters } from "./types";

// Initial state of the slice
const initialState: CategoriesState = {
   filters: {
      category: "",
      price: [0, 250],
      color: "",
      size: "",
      dressStyle: "",
   },
};

// Slice definition
const CategoriesSlice = createSlice({
   name: "Categories", // Name of the slice
   initialState, // Initial state defined above
   reducers: {
      setFilters(state, action: PayloadAction<Filters>) {
         state.filters = action.payload;
      },
   },
});

export const { setFilters } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
