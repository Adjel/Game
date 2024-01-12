import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";

function GuessResults({ wordList, answer }) {
  console.log(`in GuessResults ${wordList}`);
  console.log({ wordList });

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess
            key={num}
            answer={answer}
            value={wordList[num] ? wordList[num].word : ""}
          />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
