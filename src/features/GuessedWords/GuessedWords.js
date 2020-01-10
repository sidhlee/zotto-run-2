import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const guessedWordRows = props.guessedWords.map((guessedWord, i) => (
    <tr key={guessedWord.guessedWord + i} data-test="guessed-word">
      <td>{guessedWord.guessedWord}</td>
      <td>{guessedWord.letterMatchCount}</td>
    </tr>
  ));
  const content =
    props.guessedWords.length === 0 ? (
      <span data-test="guess-instructions">
        Guess the secret word!
      </span>
    ) : (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordRows}</tbody>
        </table>
      </div>
    );
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
