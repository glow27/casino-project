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
    setErr('вы не вошли в аккаунт');
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
              {err && <p>{err}</p>}
              <h2 className="apl">Прогнозы на АПЛ</h2>
              <h3 className="useprognoz">
                За использование прогнозов взимается 10 баллов
              </h3>

              <button className="cancel" type="submit"><a href="/">
                Отменить</a>


              </button>
              <button className="continue" type="submit">
                <a
                  href="#"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  Продолжить
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
