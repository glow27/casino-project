import React,{useRef,useEffect, useState} from 'react'
import { TweenMax, TimelineLite, Power3 } from "gsap";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actionCreator';
import axios from 'axios'

function Login(){
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);

  // const handleVK = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch('http://localhost:4000/login/vkontakte');
    
  // }

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
    const user = await respons.json();
    const {name, points, _id} = user;
    if (respons.status === 200) {
      dispatch(login({ name, points, _id, auth: true }));
      return history.push('/');
    }
    return setError('Ошибка!');
  };

  let menu = useRef(null);
  let tl = new TimelineLite();
 
  useEffect(() => {
    TweenMax.to(menu, 0, { css: { visibility: "visible" } });
   tl.from(menu, 1.2, {y:1280, ease: Power3.easeOut})
     .from(menu, 1.5,{scale: 1.4, ease: Power3.easeOut}, 1)
  });
  return (<>
  <div>
  
      <div >
        <div className="Menu" ref={(el) => (menu = el)}>
        <form onSubmit={handleClick}> 
          <div >

            <div className="input-container">
              <input name="email" type="email" placeholder="Email" required />
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>

            <div className="input-container">
              <input name="password" type="password" placeholder="пароль" required/>
              <i className="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>

            <button
              style={{ color: "black", backgroundColor: "rgb(98, 23, 8)" }}
              className="signin"
              type="submit"
            >
              Войти
            </button>
            
           
          </div>
          </form>
          <div>
               <button className="yandex">Yand</button>
            </div>
           <div>
           {/* onSubmit={(e) => handleVK(e)} */}
              <form  action='http://localhost:4000/login/vkontakte'>
    <input type="submit" value="VKVKVKVKVKVk" />
</form>
           </div>
        </div>
       
      </div>
      
    </div>
    </>
  )
 
}
export default Login;
