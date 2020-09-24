import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import cubeLeft from './images/cube1.png';
import cubeRight from './images/cube2.png';
import slot from './images/slot.png';
import Roulette from '../Roulette/Roulette';

function Home() {
  let app = useRef(null);
  let content = useRef(null);
  let images = useRef(null);
  let machine = useRef(null);

  let tl = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    const slot = machine.firstElementChild;
    const firstCube = images.firstElementChild;
    const secondCube = images.lastElementChild;
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 100,
        ease: Power3.easeOut,
        delay: 0.3,
      },
      0.15,
      'Start'
    );
    tl.to(
      firstCube,
      {
        duration: 4,
        // rotation:360,
        rotationY: 360,
        ease: Power3.easeOut,
      },
      'Start'
    ).to(
      secondCube,
      {
        duration: 4,

        // rotation:-360,
        rotationY: -360,
        ease: Power3.easeOut,
      },
      'Start'
    );
    tl.to(
      firstCube,
      1,
      { rotation: 360 },
      { x: 50, ease: Power3.easeOut },
      'Start'
    ).to(secondCube, 1, { rotation: -360 }, { x: 50, ease: Power3.easeOut });
    tl.from(slot, 1.2, { y: 1200, ease: Power3.easeOut }, 'Start');
  });
  return (
    <>
    <div className="hero" ref={(el) => (app = el)}>
        <div className="container">
          <div className="hero-inner">
       <div className= "slot-image" ref={el=> machine = el}>
            <div className="slot-machine"  >
              <div className="slot">
                <img src={slot} alt="slot" />
              </div>
              <div className="roulette">
              <Roulette/>
              </div>
           </div>
         </div>
            <div className="hero-content">
              <div className="hero-content-inner" ref={(el) => (content = el)}>
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">WELCOME </div>
                  </div>
                  <div className="hero-content-line">
                    <div>
                      <div className="hero-content-line-inner">TO OUR</div>
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">CASINO</div>
                  </div>
                </h1>
                </div>
               </div>
             <div className="hero-images">
              <div ref={(el) => (images = el)} className="hero-images-inner">
                <div className="hero-image girl">
                  <img src={cubeLeft} alt="girl" />
                </div>
                <div className="hero-image boy">
                  <img src={cubeRight} alt="boy" />
                </div>
              </div>
           </div>
       
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
