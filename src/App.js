import './App.css';
import React from "react";
import Home from "./Components/home/Home";
import Menu from "./Components/menu/Menu";
import Order from './Components/order/Order';
import Login from './Components/login/Login';
import Reservation from './Components/reservation/Reservation';

import {Routes, Route} from 'react-router-dom';
import AboutPage from './Components/about/AboutPage';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order-online" element={<Order />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
