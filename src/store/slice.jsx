import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
   try {
      const response = await axios.get(
         "https://666a97c97013419182cff3dd.mockapi.io/item/items",
      );
      return response.data;
   } catch (error) {
      throw error;
   }
});

const slice = createSlice({
   name: "items",
   initialState: {
      items: [],
      status: "idle",
      error: null,
   },
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchItems.pending, state => {
         state.status = "loading";
         state.error = null;
      });
      builder.addCase(fetchItems.fulfilled, (state, action) => {
         state.status = "success";
         state.items = action.payload;
      });
      builder.addCase(fetchItems.rejected, state => {
         state.status = "error";
         state.error = action.error.message;
      });
   },
});

export const {} = slice.actions;

export default slice.reducer;
