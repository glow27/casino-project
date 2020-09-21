import React, { useState, useEffect } from 'react';

function Roulette() {
  const [input, setInput] = useState('');
  const [btn, setBtn] = useState('');
  let [random, setRandom] = useState('');
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
        <div>Введите число от одного до десяти.</div>
        <input
          type="input"
          value={input}
          onChange={e => setInput(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setTrigger(true);
            setBtn('')
            setTimeout(function run() {
                setBtn(spinNum(input)); 
                setRandom('');
              }, 10500);
          }}
        >
          Испытать удачу!
        </button>
      </div>
      <div>{random}{btn}</div>
    </>
  );
}

export default Roulette;
