import { createStore } from "redux";
import { todoReducer } from "./todoReducer";

export let store = createStore(todoReducer);
