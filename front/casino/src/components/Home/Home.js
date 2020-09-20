import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";

function Home() {
  let app = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({delay: .4});
  useEffect(() => {
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    
    tl.staggerFrom([headlineFirst.children,headlineSecond.children,headlineThird.children], 1,{
      y:100,
      ease:Power3.easeOut,
      delay: .4
    }, .15, 'Start')
  });
  return (
    <>
      <div className="hero" ref={(el) => (app = el)}>
        <div className="hero-content">
          <div className="hero-content-inner" ref={(el) => (content = el)}>
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">WELCOME</div>
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
      </div>
    </>
  );
}
export default Home;
