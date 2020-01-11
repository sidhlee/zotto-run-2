import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export const middlewares = [thunk];
export default applyMiddleware(...middlewares)(
  createStore(rootReducer)
);
