import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./StudentSlice";

const store = configureStore({
  reducer: StudentReducer,
});
export default store;
