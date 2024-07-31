import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import HeaderSlice from "../components/header/slice/slice";
import newArrivalsSlice from "../modules/sections/newArrivals/slice/slice";
import topSellingSlice from "../modules/sections/topSelling/slice/slice";
import happyCustomersSlice from "../modules/sections/happyCustomers/slice/slice";
import productAboutSlice from "../modules/sections/productAbout/slice/slice";
import youMightAlsoLikeSlice from "../modules/sections/youMightAlsoLike/slice/slice";
import yourCartSlice from "../modules/sections/yourCart/slice/slice";

export const store = configureStore({
   reducer: {
      HeaderSlice,
      newArrivalsSlice,
      topSellingSlice,
      happyCustomersSlice,
      productAboutSlice,
      youMightAlsoLikeSlice,
      yourCartSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
