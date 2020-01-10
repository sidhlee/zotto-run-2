import React from "react";
import { shallow } from "enzyme";
import {
  findByTestAttr,
  storeFactory
} from "../../common/utils/testUtils";
import InputContainer from "./InputContainer";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<InputContainer store={store} />);
  console.log(wrapper.debug());
  return wrapper;
};

setup();

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders the input control", () => {});
    test("renders a submit button", () => {});
  });

  describe("word has been guessed successfully", () => {
    test("renders component without error", () => {});
    test("does not render the input control", () => {});
    test("does not render a submit button", () => {});
  });

  describe("update state", () => {});
});
