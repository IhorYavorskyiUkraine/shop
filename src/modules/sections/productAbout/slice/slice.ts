import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";
import { Product, Status } from "../../newArrivals/slice/slice";

type FetchProductArgs = {
   id: string;
};
export type Sizes = "" | "s" | "m" | "l" | "xl";
type ActiveTab = "Product Details" | "Rating & Reviews" | "FAQs";
export type SelectedFilter = "all" | "latest" | "newest";

interface ProductAboutState {
   product: Product | null;
   selectedSize: Sizes;
   color: string;
   colorList: string[];
   quantity: number;
   activeImage: number;
   activeIndex: number;
   activeTab: ActiveTab;
   selectedFilter: SelectedFilter;
   formStatus: boolean;
   formRating: number;
   formAuthor: string;
   formText: string;
   status: Status;
   error: string | null;
}

export const fetchProduct = createAsyncThunk<
   Product,
   FetchProductArgs,
   { rejectValue: string }
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

// export const postReview = createAsyncThunk<
//    any[],
//    {
//       id: string;
//       review: object;
//    },
//    { rejectValue: string }
// >("productAbout/postReview", async ({ id, review }, { rejectWithValue }) => {
//    try {
//       const response = await axios.post(
//          `https://666a97c97013419182cff3dd.mockapi.io/new_arrivals/items/${id}`,
//          review,
//       );

//       if (response.status !== 201) throw new Error("Error!");

//       return response.data;
//    } catch (error: any) {
//       return rejectWithValue(error.message);
//    }
// });

const initialState: ProductAboutState = {
   product: null,
   selectedSize: "s",
   color: "",
   colorList: [],
   quantity: 0,
   activeImage: 0,
   activeIndex: 0,
   activeTab: "Rating & Reviews",
   selectedFilter: "latest",
   formStatus: false,
   formRating: 0,
   formAuthor: "",
   formText: "",
   status: Status.LOADING,
   error: null,
};

const productAboutSlice = createSlice({
   name: "productAbout",
   initialState,
   reducers: {
      setSelectedSize(state, action: PayloadAction<Sizes>) {
         state.selectedSize = action.payload;
      },
      setColor(state, action: PayloadAction<string>) {
         state.color = action.payload;
      },
      setColorList(state, action: PayloadAction<string[]>) {
         state.colorList = action.payload;
      },
      setQuantity(state, action: PayloadAction<number>) {
         state.quantity = action.payload;
      },
      setActiveImage(state, action: PayloadAction<number>) {
         state.activeImage = action.payload;
      },
      setActiveIndex(state, action: PayloadAction<number>) {
         state.activeIndex = action.payload;
      },
      setActiveTab(state, action: PayloadAction<ActiveTab>) {
         state.activeTab = action.payload;
      },
      setSelectedFilter(state, action: PayloadAction<SelectedFilter>) {
         state.selectedFilter = action.payload;
      },
      setFormStatus(state, action: PayloadAction<boolean>) {
         state.formStatus = action.payload;
      },
      setFormText(state, action: PayloadAction<string>) {
         state.formText = action.payload;
      },
      setFormRating(state, action: PayloadAction<number>) {
         state.formRating = action.payload;
      },
      setFormAuthor(state, action: PayloadAction<string>) {
         state.formAuthor = action.payload;
      },
      addToCart(state, action) {},
      removeFromCart(state, action) {},
   },
   extraReducers: builder => {
      builder.addCase(fetchProduct.pending, state => {
         state.status = Status.LOADING;
         state.error = null;
      });
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
         state.status = Status.SUCCESS;
         state.product = action.payload;
      });
      builder.addCase(fetchProduct.rejected, (state, action) => {
         state.status = Status.REJECTED;
         state.error = action.payload ?? "Unknown error";
      });
      // builder.addCase(postReview.pending, state => {
      //    state.status = Status.LOADING;
      //    state.error = null;
      // });
      // builder.addCase(postReview.fulfilled, (state, action) => {
      //    state.status = Status.SUCCESS;
      //    state.product = action.payload;
      // });
      // builder.addCase(postReview.rejected, (state, action) => {
      //    state.status = Status.REJECTED;
      //    state.error = action.payload ?? "Unknown error";
      // });
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
   setSelectedFilter,
   setFormStatus,
   setFormText,
   setFormRating,
   setFormAuthor,
   addToCart,
   removeFromCart,
} = productAboutSlice.actions;

export const selectorProductAbout = (state: RootState) =>
   state.productAboutSlice;

export default productAboutSlice.reducer;
