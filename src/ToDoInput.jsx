import React, { useState } from "react";
import StyledButton from "./StyledButton";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/actions";
import styled from "styled-components/macro";

const StyledInput = styled.input`
  font-family: inherit;
  border-radius: 2rem;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 0.6rem;
  outline:none;
`;

function ToDoInput() {
  const dispatch = useDispatch();
  const [newTodoTitle, setNewTodoTitle] = useState();
  const handleChange = (event) => setNewTodoTitle(event.target.value);
  const handleClick = () => {
    dispatch(
      addTodo({
        id: Math.ceil(Math.random() * 100),
        title: newTodoTitle,
      })
    );
    setNewTodoTitle("");
  };
  return (
    <div className="row">
      <StyledInput onChange={handleChange} type="text" value={newTodoTitle}></StyledInput>
      <StyledButton color={"#9c27b0"} onClick={handleClick}>
        Add
      </StyledButton>
    </div>
  );
}

export default ToDoInput;
