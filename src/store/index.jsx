import { configureStore } from "@reduxjs/toolkit";
import global from "./slice";

export default configureStore({
   reducer: {
      global,
   },
});
