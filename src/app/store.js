import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/features/todo/todoSlice";

const Store = configureStore({
  reducer: todoReducer,
});

export default Store;
