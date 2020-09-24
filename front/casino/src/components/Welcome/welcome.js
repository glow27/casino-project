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


  return <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center'}}>
   <h2 style={{color: 'white', 'padding-top': '100px', fontSize: '50px', fontFamily: 'Play'}}>Welcome to our casino!</h2>
   <h2 style={{color: 'white', 'padding-top': '50px', fontSize: '50px', fontFamily: 'Play'}}>Click the button below and start getting money!</h2>
       <button style={{ width: '500px', marginTop:'200px'}} type="button" class='btn btn-secondary btn-lg btn-success'><a style={{textDecoration:'none', color:'white', fontWeight: 'bolder', fontFamily: 'Play'}} href="#" onClick={(e) => {handleClick(e)}}>Let's start our trip...</a></button>
  </div>

}
 
export default Welcome;
