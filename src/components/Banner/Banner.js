import React from "react";

function Banner({ wordList, answer }) {
  function isHappy() {
    console.log(
      `wordList.find((item) => item.word === answer) = ${wordList.find(
        (item) => item.word === answer
      )}`
    );
    return wordList.find((item) => item.word === answer);
  }

  function HappyBanner() {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{wordList.length} guesses</strong>.
        </p>
      </div>
    );
  }

  function SadBanner() {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return <>{isHappy() ? <HappyBanner /> : <SadBanner />}</>;
}

export default Banner;
