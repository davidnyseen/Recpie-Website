

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getLogin = createAsyncThunk(
  "login/getLogin",        
  async (value) => {

    return fetch('http://localhost:5000/login', {  
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( value ),
    })
        .then(res => res.json())
  }
); 


const loginSlice = createSlice({
  name: "isHeLoggedIn",
  initialState: {
    login: {},
    status: null,
  },
  extraReducers: {
    [getLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [getLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.login = action.payload;
      console.log(state.login);
    },
    [getLogin.rejected]: (state, action) => {
      state.status = "failed";
    },
  },

  
});
export default loginSlice.reducer;
