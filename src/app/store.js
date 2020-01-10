import { createStore } from "redux";
import rootReducer from "./rootReducer";

export const middlewares = [];
export default createStore(rootReducer);
