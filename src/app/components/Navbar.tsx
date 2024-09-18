import React, {useState, useEffect} from "react";
import style from '../style/navbar.module.css';

const Navbar = () => {
    return (
    <div className="container fixed-top">
        <span className="navbar-brand mb-0">
            <img className={style.logo} src="/icon.ico"/>
        </span> 
        <nav className='navbar navbar-expand-lg '>
            <div className="container-fluid">
                <div className="collapse navbar-collapse row" id="navbarNav"> 
                    <ul className="navbar-nav">
                        <li className={`${style.navText} nav-item col`}>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className={`${style.navText} nav-item col`}>
                            <a className="nav-link" href="#">Resume</a>
                        </li>
                        <li className={`${style.navText} nav-item col`}>
                            <a className="nav-link" href="#" aria-disabled="true">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};
export default Navbar;