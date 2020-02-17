import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import App from './App';

import * as serviceWorker from './serviceWorker';

const App = props => {
    const cars = [
        'Tacoma',
        'Suburban',
        'Jeep',
        'Ford Explorer'
    ];
    return <List cars={cars}/>
}

const List = props => {
    const listItems = props.cars.map((item, index) => (
        <li key={index}>{item}</li>
    ));
    return <ul>{listItems}</ul>
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();
