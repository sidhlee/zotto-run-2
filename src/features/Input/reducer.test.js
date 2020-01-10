import { CORRECT_GUESS } from "./actions";
import successReducer from "./reducer";

test("returns the initial state of false when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test("returns the state of true upon receiving an action of type 'CORRECT_GUESS'", () => {
  const action = {
    type: "CORRECT_GUESS"
  };
  const newState = successReducer(undefined, action);
  expect(newState).toBe(true);
});
