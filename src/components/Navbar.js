import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "./NavbarStyles.css"
import neon from "neon-colors"

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const[color, setColor] = useState(false)
        const changeColor = () => {
            if(window.scrollY >= 100) {
                setColor(true)
            }else {
                setColor(false)
            }
        }

        window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to='/'><h1 style={{color: neon.purple}}>GLX TRVL</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link style={{color: neon.purple}} to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/training'>Training</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}}/>)}
            </div>
        </div>
    );
};

export default Navbar;