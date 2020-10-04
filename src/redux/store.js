import { createStore } from "redux";
import rootReducer from "./reducers";
import { todoReducer } from "./reducers/todoReducer";

export let store = createStore(
  rootReducer,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
