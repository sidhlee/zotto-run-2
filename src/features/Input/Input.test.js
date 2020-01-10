import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../common/utils/testUtils";
import InputContainer from "./Input";

const setup = (initialState = {}) => {
  const wrapper = shallow(<InputContainer />);
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
