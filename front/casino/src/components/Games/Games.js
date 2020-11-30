import React from "react";
import { Link } from "react-router-dom";
import slot from "./images/slot.png";
import button from "./images/button.png";
import dice from './images/dice.png'
function Games() {
  return (
    <>
      {" "}
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        
           <div
            style={{
              borderwidth: "thin",
              width: "100%",
              position: "absolute",
              top: "160px",
              left: "130px",
              textalign: "right",
            }}
            className="slots"
               >
            <img style={{ width: "500px" }} src={slot} alt="slot" />
          </div>
        
           <Link
          style={{
            position: "absolute",
            top: "420px",
            left: "200px",
            zIndex: 0,
          }}
          to="/roulette"
        >
          <img src={button} alt="slot" />
        </Link>
      </div>
      <div  style={{display: 'flex', justifyContent: 'space-evenly'}}>
        
          <div
            style={{
              
              width: "100%",
              position: "relative",
              top: "60px",
              left: "550px",
              
            }}
            className="dice"
               >
            <img style={{ width: "400px" }} src={dice} alt="slot" />
          </div>
        
        <Link
          style={{
            position: "relative",
            top: "320px",
            right: "-190px",
            zIndex: 0,
          }}
          to="/casino/craps"
        >
          <img src={button} alt="slot" />
        </Link>
    </div>

      
    </>
  );
}
export default Games;
