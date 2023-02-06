import './App.css';
import React from "react";
import Home from "./Components/home/Home";
import Menu from "./Components/menu/Menu";
import Order from './Components/order/Order';
import Login from './Components/login/Login';
import ReservationPage from './Components/reservation/ReservationPage';
import AboutPage from './Components/about/AboutPage';
import {fetchAPI, submitAPI } from './temp';

import {Routes, Route} from 'react-router-dom';
import { useReducer, useEffect } from 'react';


const initializeTimes = (availableTime) => {
 // return { availableTimes : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
   let obj ={};
   obj["availableTimes"] = availableTime;
   console.log("availableitems= ");
   console.log(obj.availableTimes);
   return obj;
}


const updateTimes = (state, action) => {
  if(action.type === "date") {
     console.log("Action.payload - updateTime=" + action.payload);
     var date = new Date(action.payload); 
     console.log("date=" + date);
     return { ...state, availableTimes: fetchAPI(date) }
  }
  return state;
}

function App() {
 // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
 //let availableTimes = { availableTimes : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };

  let date = new Date();
  useEffect(
    () => {
      console.log(date);
      initializeTimes(fetchAPI(date));
    },
    []
  );

 const [state , dispatch] = useReducer(updateTimes, null, initializeTimes);

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
