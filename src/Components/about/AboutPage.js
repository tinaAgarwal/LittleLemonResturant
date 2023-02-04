import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';
import About from '../about/About';
import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return(
        <div className='aboutPage'>
            <Nav />
            <h1 className='about-us'>About Us</h1>
            <About />
            <Footer />
        </div>
    );
}

export default AboutPage;