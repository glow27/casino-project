import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <div>
            <Link exect to="/">Главная</Link>
            <Link to="/lk">Личный кабинет</Link>
        </div>
    );
}

export default Navbar;