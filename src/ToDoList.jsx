import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
    if(!todos || !todos.length){
        return <p>No todos</p>
    }
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
