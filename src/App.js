import './App.css';
import React from "react";
import Nav from "./Components/navbar/Nav";
import Hero from './Components/hero/Hero';
import Highlights from './Components/highlights/Highlights';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Highlights />
      <About />
      <Footer />
    </>
  );
}

export default App;
