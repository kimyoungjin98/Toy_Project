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
    const t_seq = seq.current;
    setTodo({ ...todo, t_content, t_seq });
  };

  const todoInsert = () => {
    if (todo.t_content == "") {
      alert("할일을 입력하세요 !");
      return false;
    }
    setTodoList([...todoList, todo]);
    seq.current++;
    setTodo({ ...todo, t_content: "" }); // input value 초기화
  };

  const todoComplete = (e) => {
    const seq = e.target.dataset.seq;
    const index = todoList.findIndex((todo) => {
      return todo.t_seq == seq;
    });
    const comp_todo = todoList[index];
    const _todoList = [...todoList];
    _todoList[index] = { ...comp_todo, t_comp: !comp_todo.t_comp };
    setTodoList(_todoList);
  };

  const todoDelete = (e) => {
    const seq = e.target.dataset.seq;
    const dTodo_list = todoList.filter((item) => {
      return item.t_seq != seq;
    });
    setTodoList(dTodo_list);
  };

  const props = {
    todo,
    setTodo,
    todoList,
    setTodoList,
    todoChange,
    todoInsert,
    todoComplete,
    todoDelete,
  };

  return <todoContext.Provider value={props}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
