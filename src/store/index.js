import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./team-slice";
const store = configureStore({
  reducer: teamSlice
});

export default store;