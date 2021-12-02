import React from "react";
import { useTodoContext } from "../context/TodoContextProvider";

const TodoInput = () => {
  const { todo, todoInsert, todoChange } = useTodoContext();

  return (
    <div className="input_div">
      <input
        placeholder="할일을 입력하세요"
        className="todo_input"
        onChange={todoChange}
        value={todo.t_content}
      />
      <button onClick={todoInsert}>추가</button>
    </div>
  );
};

export default TodoInput;
