import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (value) => {
        // const { searchReducer } = getState()
console.log({value})
    return fetch('http://localhost:5000', {  
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value}),
    })
        .then(res => res.json())
        .then((res) => (res.hits))
        
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
      console.log(state.recipes);
    },
    [getRecipes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },

  
});
export default recipeSlice.reducer;
