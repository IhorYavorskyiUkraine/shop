import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeaderState } from "./types";

const initialState: HeaderState = {
   dropdownStatus: false,
   searchInput: "",
};

const HeaderSlice = createSlice({
   name: "Header",
   initialState,
   reducers: {
      setDropdownStatus: (state, action: PayloadAction<boolean>) => {
         state.dropdownStatus = action.payload;
      },
      setSearchInput: (state, action: PayloadAction<string>) => {
         state.searchInput = action.payload;
      },
   },
});

export const { setDropdownStatus, setSearchInput } = HeaderSlice.actions;

export default HeaderSlice.reducer;
