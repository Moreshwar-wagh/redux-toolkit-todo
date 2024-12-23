"use client";
import { AddTodo } from "@/components/AddTodo";
import { Todos } from "@/components/Todos";
import { Provider } from "react-redux";
import store from "../app/store";

export default function Home() {
  return (
    <Provider store={store}>
      <h1 className="text-4xl font-bold text-center mt-8 text-gray-100">
        Todo App with Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}
