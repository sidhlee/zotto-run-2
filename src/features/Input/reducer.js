import { CORRECT_GUESS } from "./actions";

const initialState = false;

/**
 * @function successReducer
 * @param {boolean} state - is input value correct?
 * @param {object} action - action to be reduced.
 */
const successReducer = (state = initialState, action) => {
  return state;
};

export default successReducer;
