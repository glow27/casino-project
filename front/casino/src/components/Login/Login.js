import React,{useRef,useEffect} from 'react'
import { TweenMax, TimelineLite, Power3 } from "gsap";
function Login(){
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
          <div >
            <div className="input-container">
              <input type="text" placeholder="Имя пользователя" />
              <i className="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>

            <div className="input-container">
              <input type="email" placeholder="Email" />
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>

            <button
              style={{ color: "black", backgroundColor: "rgb(98, 23, 8)" }}
              className="signin"
              type="submit"
            >
              Войти
            </button>
            <div>
               <button className="yandex"></button>
            </div>
           <div>
              <button className="vk"></button>
           </div>
           
          </div>
        </div>
      </div>
    </div>
    </>
  )
 
}
export default Login;
