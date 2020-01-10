import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../../app/store";
import rootReducer from "../../app/rootReducer";

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Manually check propTypes and run test for errors
 * @param {ReactElement} component
 * @param {object} expectedProps
 */
export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

/**
 * Create a testing store with imported reducers, middlewares, and initial state.
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
