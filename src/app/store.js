import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/features/todo/todoSlice";

const Store = configureStore({
  reducer: { todo: todoReducer },
});

export default Store;
