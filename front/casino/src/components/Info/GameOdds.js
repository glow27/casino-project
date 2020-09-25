import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";

export const GameOdds = ({ game }) => {
  const { team1, team2, odd1, odd2 } = game;
  let koef = useRef(null);
  let cards = new TimelineLite()
  useEffect(()=>{
    TweenMax.to(koef, 0, {css: {visibility: "visible"}})
    cards.to(koef, 1, {x:140, ease: Power3.easeOut})
    // cards.from(koef, 1, {x:100, ease: Power3.easeOut})
  })
  return (
    <>
      <div className="card-image" ref={(el) => (koef = el)}>
        <div className="card-machine">
          <div className="cardd">
            <div className="infosport">
              <li>
                <h4>{team1}</h4>
                {odd1 < odd2 ? (
                  <p>WIN!!! coef. {odd1}</p>
                ) : (
                  <p>coef. {odd1}</p>
                )}
                <h4>{team2}</h4>
                {odd2 < odd1 ? (
                  <p>WIN!!! coef. {odd2}</p>
                ) : (
                  <p>coef. {odd2}</p>
                )}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
