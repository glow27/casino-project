import React from 'react';
import style from './Main.module.css';

import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

function Main(props) {
  return (
    <>
      <div class="row">
        <div className="col s12">
          For navbar
        </div>

        <div className="col s2">3-columns (one-half)</div>

        <div className="col s8">
          <div className={style.all}>
            <div className={style.conteiner}>
              <h1 className={style.MainIntro}>
                Привет, любитель азартных игр!
              </h1>
              <div className={style.text1}>
                Обожаешь дрочить рулетку и у тебя бабок жопой жуй? Заходи к нам
                и проиграй все!
              </div>
              <div className={style.gamebox}>
              <a id="a" class="waves-effect waves-light teal darken-4 btn-large">
                    <i class="material-icons left">casino</i>Регистрация
                  </a>
                  <a id="a" class="waves-effect waves-light teal darken-4 btn-large">
                    <i class="material-icons left">casino</i>Вход
                  </a>
                  </div>
              <div>
                <h2 className={style.GamesIntro}>Наши игры</h2>
                <div className={style.gamebox}>
                  <a class="waves-effect waves-light teal darken-4 btn-large">
                    <i class="material-icons left">casino</i>Покер
                  </a>
                  <a class="waves-effect waves-light teal darken-4 btn-large">
                    <i class="material-icons left">casino</i>Рулетка
                  </a>
                </div>
              </div>
              <div>
                <h2 className={style.RulesIntro}>Правила</h2>

                <div className={style.rules}>
                  <div className={style.CasinoRules}>
                    <h3>Правила казино</h3>
                    <div>
                      <ul>
                        <li className={style.rule}>За регистрацию вы получите 30 фишек</li>
                        <li className={style.rule}>
                          За вход в казино раз в день вы получите 10 фишек
                        </li>
                        <li className={style.rule}>
                          При переходе на рекламное объявление вы получите 2
                          фишки
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={style.games}>
                    <div>
                      <h3>Правила рулетки</h3>
                      <div className={style.RouletteRules}>Крути</div>
                    </div>

                    <div>
                      <h3>Правила покера</h3>
                      <div className={style.PokerRules}>Блефуй</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col s2">Переходите по ссылкам рекламы и получайте фишки!</div>
      </div>
    </>
  );
}

export default Main;
