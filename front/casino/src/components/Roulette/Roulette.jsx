import React, { useState, useEffect } from "react";
import result from "./images/result.png";
function Roulette() {
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState("");
  let [random, setRandom] = useState("");
  const [trigger, setTrigger] = useState(false);
  let num = 0;
  let i = 0;
  function test() {}
  useEffect(() => {
    if (trigger) {
      var interval = setInterval(() => {
        i += 1;
        setRandom((num = Math.floor(Math.random() * (10 - 1 + 1)) + 1));
        if (i >= 10) {
          setTrigger(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [trigger]);

  //   useEffect(() => {console.log('E BALLS');
  // clearInterval(interval)
  // }, [trigger]);

  //   function rand() {
  //     return (num = Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  //   }

  function spinNum(input) {
    num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    if (input == num) {
      return `Вы выиграли! Выпало число ${num}`;
    } else {
      return `Вы проиграли! Выпало число ${num}`;
    }
  }

  return (
    <>
      <div>
        <div className="textinput">Enter a number from 1 to 10</div>
        <input
          className="inputnumber"
          type="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          className="button-lucky"
          onClick={() => {
            setTrigger(true);
            setBtn("");
            setTimeout(function run() {
              setBtn(spinNum(input));
              setRandom("");
            }, 10500);
          }}
        >
          Quick spin
        </button>
      </div>
      <div>
        <div className="random">
          {random}
        </div>
        <div className="inputpicture">
          <img src={result} alt="result" />
        </div>

        <div className="result">
          <img src={btn} alt="number"/>
        </div>
      </div>
    </>
  );
}

export default Roulette;
