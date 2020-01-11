import { combineReducers } from "redux";
import successReducer from "../features/Input/reducer";
import secretWordReducer from "./secretWordReducer";
import guessedWordsReducer from "../features/GuessedWords/reducer";

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer
});
