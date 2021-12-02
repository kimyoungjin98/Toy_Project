import React, { createContext, useContext, useRef, useState } from "react";

const todoContext = createContext();
export const useTodoContext = () => {
  return useContext(todoContext);
};

const TodoContextProvider = ({ children }) => {
  const seq = useRef(0);
  // 1개의 todo
  const [todo, setTodo] = useState({
    t_seq: 0, // 시퀀스
    t_content: "", // 내용
    t_comp: false, // 완료됐는지?
  });

  // todo를 담을 list
  const [todoList, setTodoList] = useState([]);

  const todoChange = (e) => {
    const t_content = e.target.value;
    setTodo({ ...todo, t_content, t_seq: seq.current });
  };

  const todoInsert = () => {
    setTodoList([...todoList, todo]);
    seq.current++;

    const item_div = document.querySelector("div.item_div");
    const input_div = document.querySelector("div.input_div");
    const list_button = document.querySelector("button.list_button");
  };

  const todo_comp = () => {};

  const props = {
    todo,
    setTodo,
    todoList,
    setTodoList,
    todoChange,
    todoInsert,
  };

  return <todoContext.Provider value={props}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
