import React, { useEffect, useState } from 'react';

import { GameOdds } from './GameOdds';
import { Spinner1 } from '../Spinners/spinner1';

const Info = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    (async () => {try {

      const response = await fetch('/casino/soccerodds');
      if (response.status === 401) {
        setData([{ team1: 'You need to pay for the subscription' }]);
      }
      const result = await response.json();
      setData(result);
    } catch(e) {
      console.log(e);
    }})()
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'Play',
            fontSize: '40px',
            color: 'white',
          }}
        >
          Closest EPL matches
        </div>
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'Play',
            fontSize: '20px',
            color: 'white',
          }}
        >
          We guarantee that you will earn big money with us, but sometimes its
          okey to lose.
        </div>
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'Play',
            fontSize: '20px',
            color: 'white',
          }}
        >
          {data === false ? <Spinner1 /> : null}
        </div>

        <div>
          <ul>
            {data && data.data.map((el, i) => <GameOdds key={i} game={el} />)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;

// <h1 style={{textAlign: 'center'}}>Closest EPL matches</h1>
//           <h2 style={{textAlign: 'center'}}>Результат гарантирован! Можно ставить хату!</h2>
