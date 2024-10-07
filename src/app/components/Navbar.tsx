import React, {useState, useEffect} from "react";
import style from '../style/navbar.module.css';

const Navbar = () => {
    return (     
        <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <div>
                    <a className={`navbar-brand ${style.TwoPerLine}`} href="#">Brandon Stevenson</a>
                    <p className={`${style.TitleFont} ${style.TwoPerLine}`}>Software Engineer</p>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row" id="navbarNav"> 
                    <ul className={`navbar-nav ${style.navLinks}`}>
                        <li className="nav-item col">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item col">
                            <a className="nav-link active" href="#">Resume</a>
                        </li>
                        <li className="nav-item col">
                            <a className="nav-link active" href="#" aria-disabled="true">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;