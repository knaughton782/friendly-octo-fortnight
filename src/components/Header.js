import React from 'react';

const Header = ({ title }) => (
    <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/topics">Topics</a>
        <h1>{title}</h1>
    
    </div>
);

export default Header;