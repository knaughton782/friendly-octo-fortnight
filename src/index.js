import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

//use the map function to render data from the array

const App = props => {
    const items = [
        { item: 'bread', price: 3.56},
        { item: 'eggs', price: 3.15 },
        { item: 'chocolate', price: 2},
        { item: 'chocolate', price: 2.35 },
        { item: 'chocolate', price: 5} 
    ];
    
    return <List items={items} />
}

const List = props => {
    const listItems = props.items.map((item, index) => <li key={index}>{item.item}: ${(item.price).toFixed(2)}</li>);
    return <ul>{listItems}</ul>
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();
