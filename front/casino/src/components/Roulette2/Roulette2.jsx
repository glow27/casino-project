import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spinRoulette } from '../../redux/actionCreator';
import cherry from './cherry.png';
import cubes from './cubes.png';
import diamond from './diamond.png';
import lemon from './lemon.png';
import seven from './seven.png';
import whoreMachine from './slutMachine.png';
import { plusPoints, minusPoints } from '../../redux/actionCreator';

function Roulette() {
  const dispatch = useDispatch();
  const spinStore = useSelector(state => state.roulette.spines);

  const pictures = [cherry, cubes, diamond, lemon, seven];

  let [random, setRandom] = useState([1, 1, 1]);
  const [trigger, setTrigger] = useState(false);
  let [result, setResult] = useState('');
  const [trigger2, setTrigger2] = useState(false);
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
          setTrigger2(true);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [trigger]);

  useEffect(() => {
    setTimeout(function run() {
      setResult(spinNum(spinStore));
    }, 4000);
  }, [spinStore]);

  function spinNum(rand) {
    if (rand[0] === 0) {
      return '';
    } else if (rand[0] === rand[1] && rand[0] === rand[2]) {
      if(trigger2){
      dispatch(plusPoints(30))
      return `Jackpot!! You won 30 chips!`;
      }
    } else if (
      rand[0] === rand[1] ||
      rand[0] === rand[2] ||
      rand[1] === rand[2]
    ) {
      if(trigger2){
      dispatch(plusPoints(15))
      }
      return `You won! You get 15 chips!`;
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
            color: 'white',
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
            if(trigger2){
            dispatch(minusPoints(10))
            }
          }}
        >
          Test your luck!
        </button>
        <div
          style={{
            'font-size': '50px',
            color: 'white',
            'text-allign': 'center',
            height: '70px',
          }}
        >
          {trigger2 ? result : ''}
        </div>
      </div>
      <div>
        <div
          style={{
            position: 'relative',
          }}
        >
          <img
            src={whoreMachine}
            style={{ width: '850px', position: 'absolute', right: '-95px' }}
            alt=""
          ></img>
          {trigger === true ? (
            <div>
              <img
                style={{
                  width: '110px',
                  height: 'auto',
                  position: 'absolute',
                  right: '66%',
                  top: '200px',
                }}
                src={pictures[random[0] - 1]}
                alt=""
              ></img>
              <img
                style={{
                  width: '110px',
                  height: 'auto',
                  position: 'absolute',
                  right: '47%',
                  top: '200px',
                }}
                src={pictures[random[1] - 1]}
                alt=""
              ></img>
              <img
                style={{
                  width: '110px',
                  height: 'auto',
                  position: 'absolute',
                  right: '27%',
                  top: '200px',
                }}
                src={pictures[random[2] - 1]}
                alt=""
              ></img>
            </div>
          ) : (
            <div>
              <img
                style={{
                  width: '110px',
                  height: 'auto',
                  position: 'absolute',
                  right: '66%',
                  top: '200px',
                }}
                src={pictures[spinStore[0] - 1]}
                alt=""
              ></img>
              <img
                style={{
                  width: '110px',
                  height: 'auto',
                  position: 'absolute',
                  right: '47%',
                  top: '200px',
                }}
                src={pictures[spinStore[1] - 1]}
                alt=""
              ></img>
              <img
                style={{
                  width: '110px',
                  height: 'auto',
                  position: 'absolute',
                  right: '27%',
                  top: '200px',
                }}
                src={pictures[spinStore[2] - 1]}
                alt=""
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Roulette;
