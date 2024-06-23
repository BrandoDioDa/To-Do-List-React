'use client'

import React, {useState, useEffect} from "react";
import style from '../style/main.module.css';

const Footer = () => {
    return(
        <footer className='fixed-bottom'>
           <div className={style['footer-container']}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/brandon-stevenson-25b3b4212/">LinkedIn<img></img></a></li>
                    <li><a href="https://www.instagram.com/brandodioda/">Insta<img></img></a></li>
                    <li><a href="https://github.com/BrandoDioDa">Github<img></img></a></li>
                </ul>
           </div>
        </footer>
    );
}

export default Footer;