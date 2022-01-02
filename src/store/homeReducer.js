import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (dispatch, getState) => {
    return await fetch('http://localhost:8000/recipes').then(
      (res) => res.json()
    );
  }
); 

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    status: null,
  },
  extraReducers: {
    [getRecipes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.status = "success";
      state.recipes = action.payload;
    },
    [getRecipes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default recipeSlice.reducer;
