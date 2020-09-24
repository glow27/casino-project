import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import advert from './reklama.jpg';
import teq from './teq.jpeg';
import { plusPoints } from '../../redux/actionCreator';

const Header = ({ history }) => {
  const auth = useSelector((state) => state.user.auth);
  const points = useSelector((state) => state.user.points);
  const name = useSelector(state => state.user.name);
  const dispatch = useDispatch();
  const [reklama, setReklama] = useState([]);

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'MENU',
  });
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: 'MENU' });
    });
  }, [history]);

  useEffect(() => {
    const rand = Math.random() * (2 - 1) + 1;

    setReklama(
      rand > 1.5
        ? [teq, 'https://www.youtube.com/watch?v=1sMGoClxv8w&t']
        : [advert, 'https://elbrusboot.camp/']
    );
  }, [state]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'CLOSE',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'MENU',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'CLOSE',
      });
    }
  };
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

return (
  <header>
    
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to="/" style={{ fontFamily: 'Play'}}>MAIN</Link>
            {auth && <h5 style={{
            color: 'white', fontFamily: 'Play'
          }}>{name}, your chips: {points}</h5>}
          </div>
           <div>
              {/* <a href='https://elbrusboot.camp/' target="_blank" onClick={() => {dispatch(plusPoints(5))}}><img height="75px" width="600px" src={advert} alt="reklama"></img></a> */}
              <a style={{}}
                href={reklama[1]}
                target="_blank"
                onClick={() => {
                  dispatch(plusPoints(3));
                }}
              >
                <img
                  height="75px"
                  width="600px"
                  src={reklama[0]}
                  alt="reklama"
                ></img>
              </a>
            </div>
          <div className="menu">
            <button style={{
            color: 'white', fontFamily: 'Play'
          }} disabled={disabled} onClick={handleMenu}>
              {state.menuName}
            </button>
          </div>
        </div>
      </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
