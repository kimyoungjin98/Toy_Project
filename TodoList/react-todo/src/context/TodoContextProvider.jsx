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

  const onChange = (e) => {
    const t_content = e.target.value;
    setTodo({ ...todo, t_content });
  };

  const onClick = () => {
    setTodoList([...todoList, todo]);
  };

  const props = {
    todo,
    setTodo,
    todoList,
    setTodoList,
    onChange,
    onClick,
  };

  return <todoContext.Provider value={props}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
