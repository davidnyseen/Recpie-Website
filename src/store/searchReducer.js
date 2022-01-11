import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "pizza";

export const searchReducer = createSlice({
  name: "searchReducer",
  initialState: {
  value: initialStateValue,
  openNewLink: '', 
  },
  reducers: {
    searchValue: (state, action) => {
      state.value = action.payload;
    },
    openNewLinkValue: (state, action) => {
      state.openNewLink = action.payload;
    },
  },
});

export const { searchValue, openNewLinkValue } = searchReducer.actions;

export default searchReducer.reducer;
