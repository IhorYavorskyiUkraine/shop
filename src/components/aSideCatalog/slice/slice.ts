import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ASideCatalogState } from "./types";

const initialState: ASideCatalogState = {
   range: [0, 250],
   activeTabs: [false, false, false, false],
   activeIndex: -1,
   category: "",
   price: [0, 250],
   color: "",
   size: "",
   dressStyle: "",
   filters: {},
};

const aSideCatalogSlice = createSlice({
   name: "aSideCatalogSlice",
   initialState,
   reducers: {
      toggleTab(state, action: PayloadAction<number>) {
         const tabIndex = action.payload;
         if (state.activeTabs[tabIndex]) {
            delete state.activeTabs[tabIndex];
         } else {
            state.activeTabs[tabIndex] = true;
         }
      },
      setActiveIndex(state, action: PayloadAction<number>) {
         state.activeIndex = action.payload;
      },
      setCategory(state, action: PayloadAction<string>) {
         state.category = action.payload;
      },
      setPrice(state, action: PayloadAction<number[]>) {
         state.price = action.payload;
      },
      setColor(state, action: PayloadAction<string>) {
         state.color = action.payload;
      },
      setSize(state, action: PayloadAction<string>) {
         state.size = action.payload;
      },
      setDressStyle(state, action: PayloadAction<string>) {
         state.dressStyle = action.payload;
      },
   },
});

export const {
   toggleTab,
   setActiveIndex,
   setCategory,
   setPrice,
   setColor,
   setSize,
   setDressStyle,
} = aSideCatalogSlice.actions;
export default aSideCatalogSlice.reducer;
