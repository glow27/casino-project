import React, { useEffect, useState } from 'react';
import {GameOdds} from './GameOdds';
import style from './Info.module.css';

const Info = () => {
  const [data, setData] = useState(null)
  
  useEffect(async () => {
    fetch('/casino/soccerodds')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])
  return <div>
    <h1>Ближайшие матчи апл!</h1>
    <h2>Результат гарантирован! Можно ставить хату!</h2>
    {/* <p>но неставьте экспрессы, ставьте одинары и будет вам счастье!</p> */}
    <ul className={style.info}>
    {data && data.data.map((el, i) => <GameOdds key={i} game={el}/>)}
    </ul>
  </div>
}

export default Info;
