import React from "react";

function Guess({ wordList, setWordList, disabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function addWordToListAndOrFinishGame(input) {
    // word Object
    const newWord = {
      // give a random id to the object for keys
      id: crypto.randomUUID(),
      word: input,
    };

    setWordList([...wordList, newWord]);

    // reset the input
    setTentativeGuess("");
  }

  // display nothing the first time without error (undefind)
  function handleSubmit(event) {
    event.preventDefault();

    // first option to get the word only if it's a 5 chars word
    if (tentativeGuess.length !== 5) {
      console.log("tried to enter but word is not 5 length");
      return;
    }

    // We accepted the word, so add it to the word list then reset the word to nothing in the form
    console.log({ guess: tentativeGuess });
    addWordToListAndOrFinishGame(tentativeGuess);
  }

  return (
    <>
      <form
        disabled={disabled}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={tentativeGuess}
          onChange={(event) => {
            setTentativeGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default Guess;
