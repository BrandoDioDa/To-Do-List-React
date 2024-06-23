import React, {useState, useEffect} from "react";
import style from '../style/main.module.css';

const Navbar = () => {
    return (
    <nav className='navbar navbar-expand-lg fixed-top flex-container'>
        <div className="container-fluid">
            {/* Logo below is a placeholder */}
            <span className="navbar-brand mb-0">
                <img className={style.logo} src="/icon.ico"/>
            </span> 
            <div className="collapse navbar-collapse" id="navbarNav"> 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};
export default Navbar;