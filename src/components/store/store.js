import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";

export default configureStore({
  reducer: {
    searchReducer: searchReducer
  }
});
