import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Register = () => {
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
    };
    return setError('Ошибка!22');
  };

  return (
    <div>
      <div>{error}</div>
      <form onSubmit={handleClick}>
        <input name="name" type="text" required />
        <input name="email" type="email" required />
        <input name="password" type="password" required />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
