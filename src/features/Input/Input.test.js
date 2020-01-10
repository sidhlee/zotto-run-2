import React from "react";
import { shallow } from "enzyme";
import {
  findByTestAttr,
  storeFactory
} from "../../common/utils/testUtils";
import InputContainer from "./InputContainer";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<InputContainer store={store} />)
    .dive() // get past HOC <ContextProvider />
    .dive(); // get past Input to the returned JSX element <div>
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        success: false
      };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const components = findByTestAttr(wrapper, "component-input");
      expect(components.length).toBe(1);
    });
    test("renders the input control", () => {
      const inputControls = findByTestAttr(wrapper, "input-control");
      expect(inputControls.length).toBe(1);
    });
    test("renders a submit button", () => {
      const submitButtons = findByTestAttr(wrapper, "submit-button");
      expect(submitButtons.length).toBe(1);
    });
  });

  describe("word has been guessed successfully", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        success: true
      };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const components = findByTestAttr(wrapper, "component-input");
      expect(components.length).toBe(1);
    });
    test("does not render the input control", () => {
      const inputControls = findByTestAttr(wrapper, "input-control");
      expect(inputControls.length).toBe(0);
    });
    test("does not render a submit button", () => {
      const submitButtons = findByTestAttr(wrapper, "submit-button");
      expect(submitButtons.length).toBe(0);
    });
  });

  describe("update state", () => {});
});
