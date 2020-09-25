import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusPoints, minusPoints } from '../../redux/actionCreator';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';
import five from './five.png';
import six from './six.png';

function Craps() {
  const pictures = [one, two, three, four, five, six]
  const dispatch = useDispatch();
  const points = useSelector((state) => state.user.points);
  const [msg, setMsg] = useState('');
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [point, setPoint] = useState(0);
  const [win, setWin] = useState(null);
  const [rollType, setRollType] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = async () => {
    if (points <= 0) {
      return setMsg("You don't have chips!");
    }
    if (counter === 0) dispatch(minusPoints(10));
    setDice1(Math.floor(Math.random() * (6 - 1 + 1) + 1));
    setDice2(Math.floor(Math.random() * (6 - 1 + 1) + 1));
    setRollType(true);
    setCounter((state) => (state += 1));
  };

  const refresh = () => {
    setMsg('');
    setDice1(0);
    setDice2(0);
    setUserScore(0);
    setPoint(0);
    setWin(null);
    setRollType(false);
    setCounter(0);
  };

  useEffect(() => {
    setUserScore(dice1 + dice2);
  }, [counter]);

  useEffect(() => {
    setPoint(dice1 + dice2);
  }, [rollType]);

  useEffect(() => {
    if (counter > 1 && userScore === point) return setWin(1);
    if (counter > 1 && userScore === 7) return setWin(2);
  }, [userScore]);

  useEffect(() => {
    if (userScore === 7 || userScore === 11) setWin(3);
    if (userScore === 2 || userScore === 3 || userScore === 12) {
      setWin(2);
    }
  }, [point]);

  useEffect(() => {
    if (win === 1) {
      dispatch(plusPoints(20 - (counter -1)));
      setMsg(`You won ${20 - (counter -1)} chips !!!`);
    }
    if (win === 3) {
      dispatch(plusPoints(30));
      setMsg('You won 30 chips!!!');
    }
    if (win === 2) {
      setMsg('You lost!!!');
    }
  }, [win]);

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <div>
        <h3>The rulese</h3>
        <p>
          You have to pay 10 chips to start the game. If the first roll is a 7
          or 11, then You win a Jackpot 25 chips. If the first roll is a 2, 3 or
          12, also known as “craps,” then you lose. If the first roll is a 4, 5,
          6, 8, 9 or 10, then that specific number becomes the player's point.
          The player continues to roll the dice until he or she rolls the point
          number. If the point number is rolled, then you win. If a 7 is rolled,
          you lsoe.
        </p>
      </div>
      <div>
        {msg && <h2>{msg}</h2>}

        <div><h4>The point: {point}</h4></div>
        <div><h5>Your roll score: {userScore}</h5></div>
        <div>
          <img src={pictures[dice1 -1]}/>  <img src={pictures[dice2 -1]}/>
        </div>
        {msg ? (
          <button onClick={refresh}>Start new game</button>
        ) : (
          <button onClick={handleClick}>ROLL DICES</button>
        )}
      </div>
    </div>
  );
}

export default Craps;
