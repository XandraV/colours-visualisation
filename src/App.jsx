import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoInput />
      <h3>Todo List</h3>
      <ToDoList />
    </div>
  );
}

export default App;
