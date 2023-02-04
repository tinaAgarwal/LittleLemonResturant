import './App.css';
import React from "react";
import Home from "./Components/home/Home";
import Menu from "./Components/menu/Menu";
import Order from './Components/order/Order';
import Login from './Components/login/Login';
import ReservationPage from './Components/reservation/ReservationPage';
import AboutPage from './Components/about/AboutPage';

import {Routes, Route} from 'react-router-dom';
import { useReducer } from 'react';

const updateTimes = (state, action) => {
    if(action.type === "date") {
      return { availableTimes: state.availableTimes }
    }
    return state;
}


function App() {
 // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
 let initializeTimes = { availableTimes : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
 const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<ReservationPage  state={state} dispatch={dispatch} />} />
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
