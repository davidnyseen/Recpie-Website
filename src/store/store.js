import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";
import loginReducer from "./loginReducer"
import signupReducer from "./signupReducer";

export default configureStore({
  reducer: {
    searchReducer: searchReducer,
    recipes: homeReducer,
    login: loginReducer,
    signup: signupReducer,
  },
});
