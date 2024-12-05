import reducer from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    authReducer: reducer,
  },
});

export default store;
