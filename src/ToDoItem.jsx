import React, { useState } from "react";
import StyledButton from "./StyledButton";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./redux/actions";
import styled from "styled-components/macro";

const StyledTodoTitle = styled.div`
  font-family: inherit;
  padding: 0.5rem;
  float: left;
`;

const StyledInput = styled.input`
  width: 100%;
  background: lightgrey;
  font-family: inherit;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 0.6rem;
  outline: none;
`;

export default function ToDoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flow-root" }}>
      <StyledTodoTitle>
        {editable ? (
          <StyledInput
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        ) : (
          todo.title
        )}
      </StyledTodoTitle>
      <StyledButton
        align={"right"}
        color={"red"}
        onClick={() => dispatch(deleteTodo(todo))}
      >
        Delete
      </StyledButton>
      <StyledButton
        align={"right"}
        color={"orange"}
        onClick={() => {
          dispatch(updateTodo({ ...todo, title: title }));
          if (editable) {
            setTitle(todo.title);
          }
          setEditable(!editable);
        }}
      >
        {editable ? "Update" : "Edit"}
      </StyledButton>
    </div>
  );
}
