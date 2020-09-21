
import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
function Demo() {
  let warning = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    TweenMax.to(warning, 0, { css: { visibility: "visible" } });
    tl.from(warning, 1.2, { y: 1280, ease: Power3.easeOut });
  });
  return (
    <>
      <div>
        <div>
          <div className="Warning" ref={(el) => (warning = el)}>
            <div className="points">
              <h2 className="apl">Прогнозы на АПЛ</h2>
              <h3 className= "useprognoz">
                 За использование прогнозов взимается 10 баллов
              </h3>
              <button className="cancel" type="submit">
                Отменить
              </button>
              <button className="continue" type="submit">
                Продолжить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Demo;
