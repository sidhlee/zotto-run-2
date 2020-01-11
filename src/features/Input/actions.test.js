import { storeFactory } from "../../common/utils/testUtils";
import { guessWord } from "./actions";
import { getLetterMatchCount } from "../../common/utils/";
import guessedWordsReducer from "../GuessedWords/reducer";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const wrongGuessedWord = "train";
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(wrongGuessedWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: wrongGuessedWord,
            letterMatchCount: getLetterMatchCount(
              wrongGuessedWord,
              secretWord
            )
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: getLetterMatchCount(
              secretWord,
              secretWord
            )
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guessed words", () => {
    let store;
    const guessedWord = "agile";
    const guessedWords = [
      {
        guessedWord,
        letterMatchCount: getLetterMatchCount(guessedWord, secretWord)
      }
    ];
    const initialState = {
      secretWord,
      guessedWords
    };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(wrongGuessedWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: wrongGuessedWord,
            letterMatchCount: getLetterMatchCount(
              wrongGuessedWord,
              secretWord
            )
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: getLetterMatchCount(
              secretWord,
              secretWord
            )
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
