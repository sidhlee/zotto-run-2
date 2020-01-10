import React from "react";
import logo from "../logo.svg";
import Congrats from "../features/Congrats/Congrats";
import GuessedWords from "../features/GuessedWords/GuessedWords";
import { getLetterMatchCount } from "../common/utils/";

function App() {
  const secretWord = "party";
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
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
