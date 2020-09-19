import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export const Logout = () => {
  const userOut = useSelector(state => state);
  const handleClick = async () => {
    const respons = await fetch('http://localhost:4000/login/close', {
      method: 'POST',
      body: JSON.stringify(userOut),
      headers: { 'Content-type': 'Application/json' },
    })
  }

  return <Link onClick={handleClick}>Exit</Link>
}
