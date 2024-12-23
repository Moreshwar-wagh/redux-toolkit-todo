"use client";
import { AddTodo } from "@/components/AddTodo";
import { Todos } from "@/components/Todos";
import { Provider } from "react-redux";
import store from "../app/store";

export default function Home() {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  );
}
