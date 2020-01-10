/**
 * @function getLetterMatchCount
 * @param {sting} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessedWord and secretWord.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretWordLetterSet = new Set(secretWord.split(""));
  const matchedLetters = [...secretWordLetterSet].filter(letter =>
    guessedWord.includes(letter)
  );
  return matchedLetters.length;
}
