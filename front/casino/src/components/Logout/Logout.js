import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export const Logout = () => {
  const user = useSelector(state => state);
  const handleClick = async () => {
    
    const respons = await fetch('http://localhost:4000/login/close', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-type': 'Application/json' },
    })
  }

  return <button onClick={handleClick}>Exit</button>
}
