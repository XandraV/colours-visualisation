import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

const ListWrapper = styled.div`
  margin-top: 1rem;
`;

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  if (!todos || !todos.length) {
    return <p>No todos</p>;
  }
  return (
    <ListWrapper>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ListWrapper>
  );
};

export default ToDoList;
