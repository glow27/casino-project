import React,{useRef,useEffect} from 'react'
import { TweenMax, TimelineLite, Power3 } from "gsap";
function Registration(){
  let menu2 = useRef(null)
  let reg = new TimelineLite()
  useEffect(() => {
    TweenMax.to(menu2, 0, { css: { visibility: "visible" } });
    reg.from(menu2, 1.2, {y:1280, ease: Power3.easeOut})
  });
  return( 
  <>
      <div>
      <div >
        <div className="Menu2" ref={(el) => (menu2 = el)}>
          <div >
            <div className="input-container">
              <input type="text" placeholder="Имя пользователя" />
              <i className="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>

            <div className="input-container">
              <input type="email" placeholder="Email" />
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>

            <div className="input-container">
              <input type="password" placeholder="Пароль" />
              <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>

            <button
              style={{ color: "black", backgroundColor: "rgb(98, 23, 8)" }}
              className="registr"
              type="submit"
            >
              Регистрация
            </button>
   
          </div>
        </div>
      </div>
    </div>
 
  </>
  )
}
export default Registration
