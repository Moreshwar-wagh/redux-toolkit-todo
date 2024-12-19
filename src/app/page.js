"use client";
import { AddTodo } from "@/components/AddTodo";
import { Todos } from "@/components/Todos";
import { Provider } from "react-redux";
import store from "../app/store";

export default function Home() {
  return (
    <Provider store={store}>
      <h1>Learn more about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}
