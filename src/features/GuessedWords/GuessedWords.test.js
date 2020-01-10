import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import {
  findByTestAttr,
  checkProps
} from "../../common/utils/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  GuessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {});

describe("if there are no words guessed", () => {
  test("renders without error", () => {});
  test("renders an instruction to guess a word", () => {});
});

describe("if there are words guessed", () => {
  test("renders without error", () => {});
  test("renders 'guessed words' section", () => {});
  test("correct number of guessed words shown", () => {});
});
