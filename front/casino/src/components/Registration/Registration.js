import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import { useHistory } from 'react-router-dom';

function Registration() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password, name } = e.target;
    const respons = await fetch('http://localhost:4000/login/new', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        name: name.value,
      }),
      headers: { 'Content-type': 'Application/json' },
    });
    console.log(respons);
    if (respons.status === 200) {
      return history.push('/login');
    }
    return setError('Ошибка!22');
  };

  let menu2 = useRef(null);
  let reg = new TimelineLite();
  useEffect(() => {
    TweenMax.to(menu2, 0, { css: { visibility: 'visible' } });
    reg.from(menu2, 1.2, { y: 1280, ease: Power3.easeOut });
  });
  return (
    <>
      <div>
        <div>{error}</div>
        <form onSubmit={handleClick}>
          <div className="Menu2" ref={(el) => (menu2 = el)}>
            <div>
              <div className="input-container">
                <input
                  name="name"
                  type="text"
                  placeholder="Имя пользователя"
                  required
                />
                <i className="zmdi zmdi-account zmdi-hc-lg"></i>
              </div>

              <div className="input-container">
                <input name="email" type="email" placeholder="Email" required />
                <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
              </div>

              <div className="input-container">
                <input
                  name="password"
                  type="password"
                  placeholder="Пароль"
                  required
                />
                <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
              </div>

              <button
                style={{ color: 'black', backgroundColor: 'rgb(98, 23, 8)' }}
                className="registr"
                type="submit"
              >
                Регистрация
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Registration;
