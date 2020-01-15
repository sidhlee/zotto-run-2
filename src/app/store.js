import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export const middlewares = [thunk];
export default createStore(
  rootReducer, // reducer
  undefined, // preloaded-state **Don't put 'null' here!**
  applyMiddleware(...middlewares) // store enhancer
);
