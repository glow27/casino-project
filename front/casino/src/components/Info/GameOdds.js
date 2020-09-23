import React from 'react';

export const GameOdds = ({ game }) => {
  const { team1, team2, odd1, odd2 } = game;

  return (
    <>
      <li>
        <h4>{team1}</h4>
        {odd1 < odd2 ? <p>ПОБЕДА!!! коэф. {odd1}</p> : <p>коэф. {odd1}</p>}
        <h4>{team2}</h4>
        {odd2 < odd1 ? <p>ПОБЕДА!!! коэф. {odd2}</p> : <p>коэф. {odd2}</p>}
      </li>
    </>
  );
};
