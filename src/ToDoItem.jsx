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
  border-radius: 0.3rem;
  background: #e6e5e5;
  width: 100%;
  font-family: inherit;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 0.6rem;
  outline: none;
`;

export default function ToDoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flow-root" }}>
      <StyledTodoTitle>
        {editable ? (
          <StyledInput
            type="text"
            onChange={(e) => setUpdatedTitle(e.target.value)}
            value={updatedTitle}
          />
        ) : (
          updatedTitle
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
          dispatch(updateTodo({ ...todo, title: updatedTitle }));
          if (editable) {
            setUpdatedTitle(updatedTitle);
          }
          setEditable(!editable);
        }}
      >
        {editable ? "Update" : "Edit"}
      </StyledButton>
    </div>
  );
}
