export const CORRECT_GUESS = "CORRECT_GUESS";
export const GUESS_WORD = "GUESS_WORD";

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed words.
 * @returns {function} - Redux thunk function.
 */
export const guessWord = guessedWord => {
  return (dispatch, getState) => {};
};
