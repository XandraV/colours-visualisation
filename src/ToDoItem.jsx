import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./redux/actions";

export default function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{todo.title}</span>

      <button>Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
    </div>
  );
}
