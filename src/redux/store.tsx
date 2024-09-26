import { configureStore } from "@reduxjs/toolkit";
import webinarsSlice from "./reducers/webinarsSlice";

const store = configureStore({
  reducer: {
    webinarsData: webinarsSlice,
  },
});

export default store;
