import React, { useRef, useEffect } from "react";
import card from "./images/card.png";
export const GameOdds = ({ game }) => {
  const { team1, team2, odd1, odd2 } = game;
  let koef = useRef(null);
  console.log(koef);
  return (
    <>
      <li>
        <h4>{team1}</h4>
        {odd1 < odd2 ? <p>ПОБЕДА!!! коэф. {odd1}</p> : <p>коэф. {odd1}</p>}
        <h4>{team2}</h4>
        {odd2 < odd1 ? <p>ПОБЕДА!!! коэф. {odd2}</p> : <p>коэф. {odd2}</p>}
      </li>

      <div className="card-image" ref={(el) => (koef = el)}>
        <div className="card-machine">
          <div className="card">
            <img src={card} alt="crd" />
          </div>
          <div className="roulette"></div>
        </div>
      </div>
    </>
  );
};
