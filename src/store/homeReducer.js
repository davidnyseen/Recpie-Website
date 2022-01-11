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
    singleRecipevalue: {singleRecipevalue: "singleRecipevalue"},
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
  reducers: {
    singleRecipefunc: (state, action) => {
      state.singleRecipevalue = action.payload;
    },
  },
  
});
export const { singleRecipefunc } = recipeSlice.actions;
export default recipeSlice.reducer;
