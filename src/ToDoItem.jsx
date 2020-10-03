import React from "react";
import StyledButton from "./StyledButton";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./redux/actions";
import styled from "styled-components/macro";

const StyledTodoTitle = styled.div`
  font-family: inherit;
  padding: 0.5rem;
  float: left;
`;

export default function ToDoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flow-root" }}>
      <StyledTodoTitle>{todo.title}</StyledTodoTitle>
      <StyledButton align={"right"} color={"orange"}>
        Edit
      </StyledButton>
      <StyledButton
        align={"right"}
        color={"red"}
        onClick={() => dispatch(deleteTodo(todo))}
      >
        Delete
      </StyledButton>
    </div>
  );
}
