import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/actions";

function ToDoInput() {
const numOfTodos = useSelector((state) => state.todos).length;
console.log(numOfTodos);
  const dispatch = useDispatch();
  const [newTodoTitle, setNewTodoTitle] = useState();
  const handleChange = (event) => setNewTodoTitle(event.target.value);
  const handleClick = () =>
    dispatch(
      addTodo({
        id: Math.ceil(Math.random() * 100),
        title: newTodoTitle,
      })
    );
  return (
    <div>
      <h3>ToDoInput</h3>
      <div className="row">
        <input onChange={handleChange} type="text"></input>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}

export default ToDoInput;
