import { combineReducers } from "redux";
import successReducer from "../features/Input/reducer";

export default combineReducers({
  success: successReducer
});
