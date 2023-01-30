import './App.css';
import Nav from "./Components/navbar/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import React from "react";
import Hero from './Components/hero/Hero';
import Highlights from './Components/highlights/Highlights';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Highlights />
      <Main  />
      <Footer />
    </>
  );
}

export default App;
