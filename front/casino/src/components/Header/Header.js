import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from '../Hamburger/Hamburger';

const Header = ({history}) => {
const [state, setState] = useState({
  initial: false,
  clicked: null,
  menuName: "Меню"
});
const [disabled, setDisabled] = useState(false);
useEffect(() => {
  history.listen(() => {
      setState({clicked: false, menuName: "Меню"});
  });
},[history]);
const handleMenu = () => {
  disableMenu();
  if (state.initial === false){
    setState({
      initial:null,
      clicked: true,
      menuName: "Закрыть"
    });
  } else if (state.clicked === true){
    setState({
      clicked: !state.clicked,
      menuName: "Меню"
    });
  } else if (state.clicked === false){
    setState({
      clicked: !state.clicked,
      menuName: "Закрыть"
    })
  }
}
const disableMenu = () => {
  setDisabled(!disabled);
  setTimeout(()=>{
    setDisabled(false);
  }, 1200)
};
return (
  <header>
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">Главная</Link>
          </div>
          <div className="menu">
            <button disabled={disabled} onClick={handleMenu}>
              {state.menuName}
            </button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state} />
  </header>
);
}

export default withRouter(Header);


