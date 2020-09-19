import React, {useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose
} from "../Animation/Animation";

const Hamburger = ({ state }) => {
  // Создаются переменные для узлов дома
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    //  Если меню открыто и мы нажимаем на кнопку меню чтобы закрыть его
    if (state.clicked === false) {
      //  Если меню закрыто и мы хотим его открыть

      staggerRevealClose(reveal2, reveal1);
      // Настройка меню отключить
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //  настройка меню чтобы заблочить
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      // 100% настройка меню высоты 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/demo'>
                      Демо
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/login'>
                      Войти
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/registration'>
                      Регистрация
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h2> Правила:</h2>
                 <div>
                   <img className="img"></img>
                 </div>
                <p>
                
                </p>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
