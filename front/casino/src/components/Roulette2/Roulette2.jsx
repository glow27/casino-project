import React, { useState, useEffect } from 'react';

function Roulette() {
  const pictures = [
    'http://javascriptlist.narod.ru/Games/sh1.gif',
    'http://javascriptlist.narod.ru/Games/sh2.gif',
    'http://javascriptlist.narod.ru/Games/sh3.gif',
    'http://javascriptlist.narod.ru/Games/sh4.gif',
    'http://javascriptlist.narod.ru/Games/sh5.gif',
  ];
  let [random, setRandom] = useState([1, 1, 1]);
  const [trigger, setTrigger] = useState(false);
  let [result, setResult] = useState('');
  let num = 0;
  let i = 0;

  useEffect(() => {
    if (trigger) {
      var interval = setInterval(() => {
        i += 1;
        console.log(random);
        setRandom(() => [
          Math.floor(Math.random() * (5 - 1 + 1)) + 1,
          Math.floor(Math.random() * (5 - 1 + 1)) + 1,
          Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        ]);
        if (i >= 10) {
          setTrigger(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [trigger]);

  function spinNum(rand) {
    if (rand[0] === rand[1] && rand[0] === rand[2]) {
      return `Джекпот!!! Вы выиграли 300 фишек!`;
    } else if (
      rand[0] === rand[1] ||
      rand[0] === rand[2] ||
      rand[1] === rand[2]
    ) {
      return `Вы выиграли! Вам начислено 10 фишек!`;
    } else {
      return 'Вы проиграли!';
    }
  }

  

  return (
    <>
      <div>
        {random}
        <div>Крутите рулетку собирайте комбинации!</div>
        <button
          onClick={() => {
            setTrigger(true);
            setTimeout(async function run() {
                // setRandom([
                //     Math.floor(Math.random() * (5 - 1 + 1)) + 1,
                //     Math.floor(Math.random() * (5 - 1 + 1)) + 1,
                //     Math.floor(Math.random() * (5 - 1 + 1)) + 1,
                //   ]);
              setResult(spinNum(random));
            }, 10300);
          }}
        >
          Испытать удачу!
        </button>
      </div>
      <div>
        <img src={pictures[random[0] - 1]} alt=""></img>
        <img src={pictures[random[1] - 1]} alt=""></img>
        <img src={pictures[random[2] - 1]} alt=""></img>
      </div>
      <div>{result}</div>
    </>
  );
}

export default Roulette;
