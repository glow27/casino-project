
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { GameOdds } from "./GameOdds";
import style from "./Info.module.css";


const Info = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {

    const response = await fetch("/casino/soccerodds");
    if (response.status === 401) {
      return <Redirect path="/" />;
    }
    const result = await response.json();
    setData(result);
  }, []);
  return (
    <>
      <div >
      
          <div style={{textAlign: 'center', fontFamily: 'Play', fontSize: '40px', color: 'white'}}>Closest EPL matches</div>
          <div style={{textAlign: 'center', fontFamily: 'Play', fontSize: '20px', color: 'white'}}>We garantee that you will earn big money with us... but we dont that you can lose.</div>
        <div>
          <ul className={style.info}>
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
