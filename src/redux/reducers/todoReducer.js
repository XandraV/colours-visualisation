export const todoReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {id: action.id, title: action.title}];
    case "DELETE_TODO":
      console.log(state)
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? {id: todo.id, title: action.title} : todo
      );
    default:
      return state;
  }
};
