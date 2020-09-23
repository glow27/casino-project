import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from '../Animation/Animation';
import { userLogout } from '../../redux/actionCreator';

const Hamburger = ({ state }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = async () => {
    dispatch(userLogout());
    const respons = await fetch('http://localhost:4000/login/close', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-type': 'Application/json' },
    });
  };

  // Создаются переменные для узлов дома
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  // let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //  Если меню открыто и мы нажимаем на кнопку меню чтобы закрыть его
    if (state.clicked === false) {
      //  Если меню закрыто и мы хотим его открыть

      staggerRevealClose(reveal2, reveal1);
      // Настройка меню отключить
      gsap.to(menuLayer, { duration: 1, css: { display: 'none' } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //  настройка меню чтобы заблочить
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } });
      // 100% настройка меню высоты 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div
          // ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/demo"
                    >

                      Sports predictions
                    </Link>
                  </li>

                  {user.auth ? (
                    <>
                      <li>
                        <Link
                          onMouseEnter={(e) => handleHover(e)}
                          onMouseOut={(e) => handleHoverExit(e)}
                          ref={(el) => (line3 = el)}
                          to="/roulette"
                        >
                          Roulette
                        </Link>
                      </li>
                      <li>
                        <Link
                          onMouseEnter={(e) => handleHover(e)}
                          onMouseOut={(e) => handleHoverExit(e)}
                          ref={(el) => (line3 = el)}
                          to="/lk"
                        >
                          Your profile
                        </Link>
                      </li>{' '}
                      <li>
                        <Link
                          onMouseEnter={(e) => handleHover(e)}
                          onMouseOut={(e) => handleHoverExit(e)}
                          ref={(el) => (line2 = el)}
                          onClick={handleClick}
                          to="#"
                        >
                          Logout
                        </Link>
                      </li>{" "}

                    </>
                  ) : (
                      <>
                        <li>
                          <Link
                            onMouseEnter={(e) => handleHover(e)}
                            onMouseOut={(e) => handleHoverExit(e)}
                            ref={(el) => (line2 = el)}
                            to="/login"
                          >
                            Login
                        </Link>
                        </li>
                        <li>
                          <Link
                            onMouseEnter={(e) => handleHover(e)}
                            onMouseOut={(e) => handleHoverExit(e)}
                            ref={(el) => (line3 = el)}
                            to="/registration"
                          >
                            Registration
                        </Link>
                        </li>

                      </>
                    )}
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">

                <ul>

                  <div className="rules">
                    <h2> Our rules:</h2>
                  </div>
                  <div className="rule1">You get 30 chips when you register</div>

                  <div className="rule2">

                  For entering the casino once a day, you will receive 10 chips
                  </div>
                  <div className="rule3">

                    When you click on an advertisment, you will receive 2 chips
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
