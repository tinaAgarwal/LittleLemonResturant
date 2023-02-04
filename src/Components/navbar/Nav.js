import './Nav.css';
import React, {useState} from 'react';
import url from "../assets/Logo.svg";
import { Route, Routes, Link } from 'react-router-dom';

/*mobile */
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';

import Menu from '../menu/Menu';
import ReservationPage from '../reservation/ReservationPage';
import Order from '../order/Order';
import Login from '../login/Login';
import AboutPage from '../about/AboutPage';
import Home from '../home/Home';

function Nav () {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div className="navbar">
            <div className='nav-container'>
                <header className='header'>
                    <img src={url} alt="Little Lemon Logo"></img>
                </header>
                <nav>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <Link to="/home" className='nav-item'>Home</Link>
                        <Link to="/about" className='nav-item'>About</Link>
                        <Link to="/menu" className='nav-item'>Menu</Link>
                        <Link to="/reservation" className='nav-item'>Reservation</Link>
                        <Link to="/order-online" className='nav-item'>Order Online</Link>
                        <Link to="/login" className='nav-item'>Login</Link>
                    </ul>
                    <div className='hamburger' onClick={handleClick} >
                        {click ? <FaRegTimesCircle className='icon' /> :
                        <HiOutlineMenuAlt4 className='icon' /> }
                    </div>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservation" element={<ReservationPage />} />
                    <Route path="/order-online" element={<Order />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
}

export default Nav;