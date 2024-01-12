import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);

  console.info(`in Game.js ${wordList}`);
  console.info({ wordList });

  function isGameFinished() {
    // return true if the game is finished
    // the game is finished if player did 6 tentatives or get the answer
    return (
      wordList.length == 6 || wordList.find((item) => item.word === answer)
    );
  }

  return (
    <>
      <GuessResults
        wordList={wordList}
        setWordList={setWordList}
        answer={answer}
      />
      {isGameFinished() ? (
        <Banner wordList={wordList} answer={answer} />
      ) : (
        <GuessInput
          wordList={wordList}
          setWordList={setWordList}
          disabled={isGameFinished()}
        />
      )}
    </>
  );
}

export default Game;
