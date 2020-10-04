const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "UPDATE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                id: action.id,
                title: action.title,
              }
            : todo
        ),
      };
    default:
      return state;
  }
};
