import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import styled from "styled-components/macro";

const PageWrapper = styled.div`
  text-align: center;
  font-family: Verdana, sans-serif;
  margin-top: 5rem;
`;
const TodoAppBlock = styled.div`
  padding: 1rem;
  display: inline-block;
  min-width: 30rem;
  min-height: 15rem;
  background: lightgrey;
  border-radius: 2rem;
`;

function App() {
  return (
    <PageWrapper>
      <TodoAppBlock>
        <h3>Todo List</h3>
        <ToDoInput />
        <ToDoList />
      </TodoAppBlock>
    </PageWrapper>
  );
}

export default App;
