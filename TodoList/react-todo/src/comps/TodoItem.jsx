import React from "react";
import { useTodoContext } from "../context/TodoContextProvider";

const TodoItem = () => {
  const { todoList } = useTodoContext();

  const todoItem = todoList.map(({ t_seq, t_content, t_comp }) => {
    return (
      <div key={t_seq} className="item_div">
        <div>&times;</div>
        <div className={t_comp && "content_comp"}>{t_content}</div>
        {t_comp ? <div>&#x2713;</div> : <div></div>}
      </div>
    );
  });

  return <section className="item_section">{todoItem}</section>;
};

export default TodoItem;
