import React, {useState, useEffect} from "react";
import style from '../style/main.module.css';

const Navbar = () => {
    return (
    <nav className='navbar fixed-top flex-container'>
        <div className="container-fluid">
            {/* Logo below is a placeholder */}
            <span className="navbar-brand mb-0"><img className={style.logo} src="/icon.ico"/></span> 
        </div>
    </nav>
    );
};
export default Navbar;