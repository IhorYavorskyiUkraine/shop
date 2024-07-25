import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export enum Status {
   LOADING = "loading",
   SUCCESS = "success",
   REJECTED = "rejected",
}

type Review = {
   id: string;
   rating: number;
   author: string;
   review: string;
   date: string;
};

type Faq = {
   question: string;
   answer: string;
};

type ColorOption = {
   color: string;
   images: string[];
};

type ProductDetails = {
   Material: string;
   CareInstructions: string;
   Fit?: string;
   Origin?: string;
};

export type Options = {
   size: string[];
   colors: ColorOption[];
};

export type Product = {
   description?: string;
   faq?: Faq;
   productDetails: ProductDetails;
   id: string;
   image: string;
   name: string;
   rating: number;
   discount: boolean;
   price: number;
   oldPrice: number;
   options: Options;
   reviews: Review[];
};

interface NewArrivalsState {
   newArrivals: Product[];
   visibleData: number;
   status: Status;
   error: string | null;
}

export const fetchNewArrives = createAsyncThunk<
   Product[],
   void,
   { rejectValue: string }
>("newArrivals/fetchItems", async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<Product[]>(
         "https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items",
      );

      if (response.status !== 200) throw new Error("Error!");

      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});

const initialState: NewArrivalsState = {
   newArrivals: [],
   visibleData: 4,
   status: Status.LOADING,
   error: null,
};

const newArrivalsSlice = createSlice({
   name: "newArrivals",
   initialState,
   reducers: {
      setVisibleData(state, action: PayloadAction<number>) {
         state.visibleData = action.payload;
      },
   },
   extraReducers: builder => {
      builder.addCase(fetchNewArrives.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      builder.addCase(fetchNewArrives.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.newArrivals = action.payload;
      });
      builder.addCase(fetchNewArrives.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
   },
});

export const { setVisibleData } = newArrivalsSlice.actions;

export default newArrivalsSlice.reducer;
