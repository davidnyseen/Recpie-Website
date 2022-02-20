import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  fetchRecipes  from '../utils/fetchRecipes';
export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (value) => {
   return fetchRecipes(value)
        .then(res => res.json())
        .then((res) => (res.hits))
        
  }
); 



const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    status: {},
  },
  extraReducers: {
    [getRecipes.pending]: (state, action) => {
      state.status = {loading:"loading"};
      
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.status = {success:"success"};
      state.recipes = action.payload;
      console.log(state.recipes);
    },
    [getRecipes.rejected]: (state, action) => {
      state.status = {failed:"failed"};
    },
  },

  
});
export default recipeSlice.reducer;
