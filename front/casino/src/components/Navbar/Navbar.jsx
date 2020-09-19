import React from 'react';
import 'materialize-css';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'
import { Logout } from '../AuthTest/Logout';

function Navbar(props) {
    return (
       
        <nav className={style.navbar}>
        <div >
          <ul >
           <li className={style.button}> <Link exect to="/">Главная</Link></li>
           <li> <Link to="/lk">Личный кабинет</Link></li>
           <li> <Logout/></li>
         </ul>
        </div>
      </nav>
    );
}

export default Navbar;

