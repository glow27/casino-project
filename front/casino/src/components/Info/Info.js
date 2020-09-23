import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {GameOdds} from './GameOdds';
import style from './Info.module.css';

const Info = () => {
  const [data, setData] = useState(null)
  
  useEffect(async () => {
    const response = await fetch('/casino/soccerodds')
    if (response.status === 401) {return <Redirect path='/'/>}
     const result = await response.json()
    setData(result)
      
  }, [])
  return <div>
    <h1>Ближайшие матчи Aпл!</h1>
    <h2>Результат гарантирован! Можно ставить хату!</h2>
    <p>но неставьте экспрессы, ставьте одинары!</p>
    <ul className={style.info}>
    {data && data.data.map((el, i) => <GameOdds key={i} game={el}/>)}
    </ul>
  </div>
}

export default Info;
