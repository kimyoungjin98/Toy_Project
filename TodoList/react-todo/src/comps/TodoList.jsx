import React from "react";
import TodoContextProvider from "../context/TodoContextProvider";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <TodoContextProvider>
      <TodoInput />
      <TodoItem />
    </TodoContextProvider>
  );
}

export default TodoList;
