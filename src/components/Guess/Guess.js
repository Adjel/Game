import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Guess({ value, answer }) {
  //console.log("in Guess (cell");
  //console.log({ value });

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <span
            className={
              checkGuess(value, answer)
                ? `cell ${checkGuess(value, answer)[num].status}`
                : "cell"
            }
            key={num}
          >
            {value ? value[num] : ""}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
