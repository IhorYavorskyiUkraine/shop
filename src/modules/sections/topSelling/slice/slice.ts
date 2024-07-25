import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, Status } from "../../newArrivals/slice/slice";

interface TopSellingState {
   topSelling: Product[];
   visibleData: number;
   status: "loading" | "success" | "rejected";
   error: string | null;
}

export const fetchTopSelling = createAsyncThunk<
   Product[],
   void,
   { rejectValue: string }
>("topSelling/fetchTopSelling", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<Product[]>(
         "https://666a9be47013419182d00996.mockapi.io/top_selling/items",
      );

      if (response.status !== 200) throw new Error("Error!");

      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

const initialState: TopSellingState = {
   topSelling: [],
   visibleData: 4,
   status: Status.LOADING,
   error: null,
};

const topSellingSlice = createSlice({
   name: "topSelling",
   initialState,
   reducers: {
      setVisibleData(state, action: PayloadAction<number>) {
         state.visibleData = action.payload;
      },
   },
   extraReducers: builder => {
      builder.addCase(fetchTopSelling.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      builder.addCase(fetchTopSelling.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.topSelling = action.payload;
      });
      builder.addCase(fetchTopSelling.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

export const { setVisibleData } = topSellingSlice.actions;

export default topSellingSlice.reducer;
