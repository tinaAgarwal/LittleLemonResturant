import './Nav.css';
import React, {useState} from 'react';
import url from "../assets/Logo.svg";

/*mobile */
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';


function Nav () {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div className="navbar">
            <div className='container'>
                <header>
                    <img src={url} alt="Little Lemon Logo"></img>
                </header>
                <nav>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li><a href='#'>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservation</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    <div className='hamburger' onClick={handleClick} >
                        {click ? <FaRegTimesCircle className='icon' /> : 
                        <HiOutlineMenuAlt4 className='icon' /> }
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Nav;