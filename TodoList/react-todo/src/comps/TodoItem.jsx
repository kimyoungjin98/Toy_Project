import React from "react";
import { useTodoContext } from "../context/TodoContextProvider";

const TodoItem = () => {
  const { todoList } = useTodoContext();

  const todoItem = todoList.map((todo) => {
    return (
      <div key={todo.seq} className="item_div">
        <p>{todo.seq}</p>
        <p>{todo.content}</p>
      </div>
    );
  });

  return <section className="todo_list">{todoItem}</section>;
};

export default TodoItem;
