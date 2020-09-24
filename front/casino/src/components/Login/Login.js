import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actionCreator';

import '../../App.scss';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const respons = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: { 'Content-type': 'Application/json' },
      
    });
    if (respons.status === 401) {
      setError('Ошибка!');

      return history.push('/registration');
    }

    if (respons.status === 200) {
      const user = await respons.json();
      const { name, points, _id } = user;
      dispatch(userLogin({ name, points, _id, auth: true }));

      return history.push('/');
    }
  };

  let login = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    TweenMax.to(login, 0, { css: { visibility: 'visible' } });
    tl.from(login, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start').from(
      login,
      1.5,
      { scale: 1.4, ease: Power3.easeOut },
      0.1
    );
  }, [tl]);
  return (
    <div>
      <div className="Login" ref={(el) => (login = el)}>
        <div className="vod">
          <form onSubmit={(e) => handleClick(e)}>
            <div className="input-container">
              <input name="email" type="email" placeholder="Email" required />
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>

            <div className="input-container2">
              <input
                name="password"
                type="password"
                placeholder="password"
                required
              />
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>

            <button className="signin" type="submit">
              Login
            </button>
          </form>
          <div>
            <a
              href="http://localhost:4000/login/yandex"
              className="yandex"
              type="submit"
            ></a>
          </div>
          <div>
            <a
              href="http://localhost:4000/login/vkontakte"
              className="vk"
              type="submit"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
