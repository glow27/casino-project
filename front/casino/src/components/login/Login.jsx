import React from 'react';

export const Login = () => {

  const handleClick = async (e) => {
    e.preventDefault();
    const {email, password} = e.target;
    const respons = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: {'Content-type': 'Application/json'},
    });
    // const result = await respons.json();

  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input name="email" type="email" required/>
        <input name="password" type="password" required/>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
