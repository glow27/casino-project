import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actionCreator';

function Welcome() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    const id = location.search.slice(1);

    const response = await fetch('/login/user', {
      method: 'POST',
      body: JSON.stringify({
        id,
      }),
      headers: { 'Content-type': 'Application/json' },
      
    });
    const user = await response.json();
    const { name, points, _id } = user;

    if (response.status === 200) {
      dispatch(userLogin({ name, points, _id, auth: true }));
      return history.push('/');
    }
  };

  return (
    <div>
      <h1>Рот этого казино вас приветствует!</h1>
      <button>
        <a
          href="#"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Пуститься во все тяжкие
        </a>
      </button>
    </div>
  );
}

export default Welcome;
