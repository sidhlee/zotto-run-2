import { GUESS_WORD } from "../Input/actions";
import { getLetterMatchCount } from "../../common/utils/";

const guessWord = (state, action) => {
  const letterMatchCount = getLetterMatchCount(
    action.guessedWord,
    action.secretWord
  );
  return [
    ...state,
    {
      guessedWord: action.guessedWord,
      letterMatchCount
    }
  ];
};

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - actions to be reduced.
 * @returns {array} - New guessed words state.
 */
const guessedWordsReducer = (state = [], action) => {
  switch (action.type) {
    case GUESS_WORD:
      return guessWord(state, action);
    default:
      return state;
  }
};

export default guessedWordsReducer;
