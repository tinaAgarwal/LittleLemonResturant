import React from 'react';
import url from "../assets/restauranfood.jpg";
import './Hero.css';

const Hero = () => {
    return(
        <div className='hero-section'>
            <div className='content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are family owned, Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className='btn'>
                    Reserve a Table
                </button>
            </div>
            <div className='image'>
                <img src={url} height="250px" width="200px"></img>
            </div>
        </div>
    );
}

export default Hero;