import React,{useRef,useEffect} from 'react'
import { TweenMax, TimelineLite, Power3 } from "gsap";
function Login(){
  let login = useRef(null);
  let tl = new TimelineLite();
 
  useEffect(() => {
    TweenMax.to(login, 0, { css: { visibility: "visible" } });
   tl.from(login, 1.2, {y:1280, ease: Power3.easeOut})
     .from(login, 1.5,{scale: 1.4, ease: Power3.easeOut}, 1)
  });
  return (<>
  <div>
      <div >
        <div className="Login" ref={(el) => (login = el)}>
          <div className="vod">
            <div className="input-container">
              <input type="text" placeholder="Имя пользователя" />
              <i className="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>

            <div className="input-container2">
              <input type="email" placeholder="Email" />
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>

            <button className="signin"
              type="submit"
            >
              Войти
            </button>
            <div>
              
               <a href="#"className="yandex" type="submit"></a>
            </div>
           <div>
              <a href="#"className="vk" type="submit"></a>
           </div>
           
          </div>
        </div>
      </div>
    </div>
    </>
  )
 
}
export default Login;
