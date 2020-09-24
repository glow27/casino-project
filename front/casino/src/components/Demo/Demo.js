import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { minusPoints } from '../../redux/actionCreator';

function Demo() {
  const [err, setErr] = useState(null);
  const auth = useSelector((state) => state.user.auth);
  const points = useSelector((state) => state.user.points);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    if (auth && points > 0) {
      dispatch(minusPoints(10));
      return history.push('/casino/soccerbet');
    }
    if (points <= 0) setErr('You need more chips');
    if (!auth) setErr('Please login first!');
  };

  let warning = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    TweenMax.to(warning, 0, { css: { visibility: 'visible' } });
    tl.from(warning, 1.2, { y: 1280, ease: Power3.easeOut });
  });
  return (
    <>
      <div>
        <div>
          <div className="Warning" ref={(el) => (warning = el)}>
            <div className="points">
              {err && <p style={{textAlign: 'center'}}>{err}</p>}
              <h2 className="apl">Predictions on EPL</h2>
              <h3 className="useprognoz">
                Price for having a prediction is 10 chips
              </h3>

              <button className="cancel" type="submit"><a href="/">
                Cancel</a>


              </button>
              <button className="continue" type="submit">
                <a
                  href="#"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  Continue
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Demo;
