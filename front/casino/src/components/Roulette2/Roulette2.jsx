import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spinRoulette } from '../../redux/actionCreator';
import cherry from './cherry.png';
import cubes from './cubes.png';
import diamond from './diamond.png';
import lemon from './lemon.png';
import seven from './seven.png';
import whoreMachine from './slutMachine.png';

function Roulette() {
  const dispatch = useDispatch();
  const spinStore = useSelector(state => state.roulette.spines);

  const pictures = [cherry, cubes, diamond, lemon, seven];

  let [random, setRandom] = useState([1, 1, 1]);
  const [trigger, setTrigger] = useState(false);
  let [result, setResult] = useState('');
  let num = 0;
  let i = 0;

  useEffect(() => {
    if (trigger) {
      var interval = setInterval(() => {
        i += 1;
        // console.log(random);
        setRandom(
          () =>
            (num = [
              Math.floor(Math.random() * (5 - 1 + 1)) + 1,
              Math.floor(Math.random() * (5 - 1 + 1)) + 1,
              Math.floor(Math.random() * (5 - 1 + 1)) + 1,
            ])
        );
        if (i >= 4) {
          setTrigger(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [trigger]);

  useEffect(() => {
    setTimeout(function run() {
      console.log(spinStore);
      setResult(spinNum(spinStore));
    }, 4000);
  }, [spinStore]);

  function spinNum(rand) {
    if (rand[0] === 0) {
      return '';
    } else if (rand[0] === rand[1] && rand[0] === rand[2]) {
      return `Jackpot!!! You won 300 chips!`;
    } else if (
      rand[0] === rand[1] ||
      rand[0] === rand[2] ||
      rand[1] === rand[2]
    ) {
      return `You won! You get 10 chips!`;
    } else {
      return 'Sorry, you lost!';
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', 'flex-direction': 'column' }}>
        <div
          style={{
            'font-size': '50px',
            'color': 'white',
            'text-align': 'center',

          }}
        >
          Spin roulette and get chips!
        </div>
        <button
          style={{
            'text-allign': 'center',
            'font-size': '20px',
            'font-weight': '500',
          }}
          class="btn btn-warning"
          onClick={() => {
            setTrigger(true);
            dispatch(spinRoulette());
          }}
        >
          Test your luck!
        </button>
      </div>
      <div>
        <img src={whoreMachine} style={{ width: '1100px' }} alt=""></img>
        {trigger === true ? (
          <>
            <img
              style={{ width: '140px', height: 'auto', position: "absolute", top:" 480px", right: "995px" }}
              src={pictures[random[0] - 1]}
              alt=""
            ></img>
            <img
              style={{  width: '140px', height: 'auto', position: "absolute", top:" 480px", right: "844px"  }}
              src={pictures[random[1] - 1]}
              alt=""
            ></img>
            <img
              style={{width: '140px', height: 'auto', position: "absolute", top:" 480px", right: "687px" }}
              src={pictures[random[2] - 1]}
              alt=""
            ></img>
          </>
        ) : (
          <div style={{ 'text-allign': 'center' }}>
            <img
              style={{ width: '140px', height: 'auto', position: "absolute", top:" 480px", right: "995px" }}
              src={pictures[spinStore[0] - 1]}
              alt=""
            ></img>
            <img
              style={{ width: '140px', height: 'auto', position: "absolute", top:" 480px", right: "844px" }}
              src={pictures[spinStore[1] - 1]}
              alt=""
            ></img>
            <img
              style={{ width: '140px', height: 'auto', position: "absolute", top:" 480px", right: "687px" }}
              src={pictures[spinStore[2] - 1]}
              alt=""
            ></img>
          </div>
        )}
      </div>
      <div
        style={{ 'font-size': '50px', color: 'white', 'text-allign': 'center' }}
      >
        {result}
      </div>
    </div>
  );
}

export default Roulette;
