import { configureStore } from "@reduxjs/toolkit";

import newArrivalsSlice from "../modules/sections/newArrivals/slice/slice";
import topSellingSlice from "../modules/sections/topSelling/slice/slice";
import happyCustomersSlice from "../modules/sections/happyCustomers/slice/slice";
import productAboutSlice from "../modules/sections/productAbout/slice/slice";

export default configureStore({
   reducer: {
      newArrivalsSlice,
      topSellingSlice,
      happyCustomersSlice,
      productAboutSlice,
   },
});
