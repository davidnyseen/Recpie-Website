import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const homeReducer = createSlice({
  name: "recipes",
  initialState: { value: initialStateValue },
  reducers: {
    initializeArray: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { initializeArray } = homeReducer.actions;

export default homeReducer.reducer;
