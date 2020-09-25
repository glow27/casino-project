import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spinRoulette, fakeRoulette } from '../../redux/actionCreator';
import cherry from './cherry.png';
import cubes from './cubes.png';
import diamond from './diamond.png';
import lemon from './lemon.png';
import seven from './seven.png';
import whoreMachine from './slutMachine.png';
import pumpkin from './pumpkin.png';
import inc from './inc.png';
import pharaon from './pharaon.png';
import chips from './chips.png';
import beer from './beer.png';
import rock from './rock.png';

import { Alert } from 'react-bootstrap';

import { plusPoints, minusPoints } from '../../redux/actionCreator';

function Roulette() {
  const dispatch = useDispatch();
  const spinStore = useSelector(state => state.roulette.spines);
  const points = useSelector(state => state.user.points);

  const pictures = [
    cherry,
    cubes,
    diamond,
    lemon,
    seven,
    pumpkin,
    pharaon,
    inc,
    chips,
    beer,
    rock,
  ];

  let [random, setRandom] = useState([1, 1, 1]);
  const [trigger, setTrigger] = useState(false);
  let [result, setResult] = useState('');
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(true);
  const [trigger4, setTrigger4] = useState(true);

  let num = 0;
  let i = 0;

  useEffect(() => {
    if (trigger) {
      var interval = setInterval(() => {
        i += 1;
        setRandom(
          () =>
            (num = [
              Math.round(1 - 0.5 + Math.random() * (11 - 1 + 1)),
              Math.round(1 - 0.5 + Math.random() * (11 - 1 + 1)),
              Math.round(1 - 0.5 + Math.random() * (11 - 1 + 1)),
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
    if (trigger4) {
      setTimeout(function run() {
        dispatch(fakeRoulette());
        setResult('Sorry, you lost!');
        setTrigger4(false);
      }, 4000);
    }
  }, [spinStore]);

  useEffect(() => {
    if (trigger4 === false) {
      setTimeout(function run() {
        setResult(spinNum(spinStore));
      }, 4000);
    }
  }, [spinStore]);

  function spinNum(rand) {
    if (rand[0] === 0) {
      return '';
    } else if (rand[0] === rand[1] && rand[0] === rand[2]) {
      if (trigger2) {
        dispatch(plusPoints(30));
        return `Jackpot!! You won 30 chips!`;
      }
    } else if (
      rand[0] === rand[1] ||
      rand[0] === rand[2] ||
      rand[1] === rand[2]
    ) {
      if (trigger2) {
        dispatch(plusPoints(15));
      }
      return `You won! You get 15 chips!`;
    } else {
      return 'Sorry, you lost!';
    }
  }

  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
            'flex-direction': 'column',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              'font-size': '50px',
              color: 'white',
              'text-align': 'center',
              fontFamily: 'Play',
            }}
          >
            Spin roulette and get chips!
          </div>
          <button
            style={{
              'text-allign': 'center',
              'font-size': '20px',
              'font-weight': '500',
              fontFamily: 'Play',
            }}
            class="btn btn-warning"
            onClick={() => {
              if (points >= 10) {
                if (trigger3) {
                  dispatch(minusPoints(10));
                  setTrigger3(false);
                }

                setTrigger(true);
                dispatch(spinRoulette());
                if (trigger2) {
                  dispatch(minusPoints(10));
                }
              } else if(points < 10) {
                setResult('You dont have enough chips')
              }
            }}
          >
            Test your luck!
          </button>
          <div
            style={{
              fontSize: '50px',
              color: 'white',
              textAllign: 'center',
              height: '70px',
              fontFamily: 'Play',
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
    </>
  );
}

export default Roulette;
