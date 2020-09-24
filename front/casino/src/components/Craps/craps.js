import React, { useEffect, useState } from 'react';


function Craps() {
  const [trigger, setTrigger] = useState(false);
  
  
  
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [point, setPoint] = useState(0);
  const [win, setWin] = useState(null);
  const [rollType, setRollType] = useState(false);
  
  const handleClick = () => {
    setDice1(Math.floor(Math.random() * (6 - 1 + 1) + 1))
      setDice2(Math.floor(Math.random() * (6 - 1 + 1) + 1))

     
      
  }

  
  useEffect(() => {

    
    
  setUserScore(dice1 + dice2)
      
      
      
  
      if (userScore === 7 || userScore === 11) return setWin(1);
      if (userScore === 2 || userScore === 3 || userScore === 12) {
        
        return setWin(2);
      }
  

      setPoint(dice1 + dice2);
      return setRollType(true)
     
    
  }, [dice2])

  useEffect(() => {
    if (rollType) {
      setDice1(Math.floor(Math.random() * (6 - 1 + 1) + 1))
      setDice2(Math.floor(Math.random() * (6 - 1 + 1) + 1))
  
      setUserScore(dice1 + dice2);
  
      if (userScore === point) return setWin(1);
      if (userScore === 7) return setWin(2);
     
    }
  }, [])

  return (
    <div style={{textAlign: 'center', color: 'white'}}>
      {win === 1 ? <h2>you won!</h2> : null}
      {win === 2 ? <h2>you lost!</h2> : null}
      <div>Point: {point}</div>
      <div>userScore: {userScore}</div>
      <div>
        {dice1} & {dice2}
      </div>
      <button onClick={handleClick}>ROLL DICES2</button>
    </div>
  );
}

export default Craps;
