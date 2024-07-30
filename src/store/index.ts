import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import newArrivalsSlice from "../modules/sections/newArrivals/slice/slice";
import topSellingSlice from "../modules/sections/topSelling/slice/slice";
import happyCustomersSlice from "../modules/sections/happyCustomers/slice/slice";
import productAboutSlice from "../modules/sections/productAbout/slice/slice";
import youMightAlsoLikeSlice from "../modules/sections/youMightAlsoLike/slice/slice";

export const store = configureStore({
   reducer: {
      newArrivalsSlice,
      topSellingSlice,
      happyCustomersSlice,
      productAboutSlice,
      youMightAlsoLikeSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
