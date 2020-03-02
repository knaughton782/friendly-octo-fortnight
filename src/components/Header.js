import React from 'react';
import '../styles/index.css';




const Header = ({ title }) => (
    <div className='header'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/topics">Topics</a>
        <h1>{title}</h1>
    
    </div>
);

export default Header;