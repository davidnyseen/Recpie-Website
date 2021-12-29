import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";

export default configureStore({
  reducer: {
    searchReducer: searchReducer,
    homeReducer: homeReducer
  }
});
