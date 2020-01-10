import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { getLetterMatchCount } from "../../common/utils/";

import {
  findByTestAttr,
  checkProps
} from "../../common/utils/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
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

const secretWord = "party";

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWord: [] });
  });
  test("renders without error", () => {
    const components = findByTestAttr(
      wrapper,
      "component-guessed-words"
    );
    expect(components.length).toBe(1);
  });
  test("renders an instruction to guess a word", () => {
    const instructions = findByTestAttr(
      wrapper,
      "guess-instructions"
    );
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: getLetterMatchCount("train", secretWord)
    },
    {
      guessedWord: "agile",
      letterMatchCount: getLetterMatchCount("agile", secretWord)
    },
    {
      guessedWord: "train",
      letterMatchCount: getLetterMatchCount("train", secretWord)
    }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error", () => {
    const components = findByTestAttr(
      wrapper,
      "component-guessed-words"
    );
    expect(components.length).toBe(1);
  });
  test("renders 'guessed words' section", () => {
    const guessedWordsNodes = findByTestAttr(
      wrapper,
      "guessed-words"
    );
    expect(guessedWordsNodes.length).toBe(1);
  });
  test("correct number of guessed words shown", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
