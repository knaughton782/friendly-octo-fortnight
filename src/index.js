import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

//use the map function to render data from the array

const App = props => {
    // for loop to push items to new array
    const items = ['bread', 'milk', 'eggs', 'chocolate', 'chocolate', 'chocolate'];
    
    return <List items={items} />
}

const List = props => {
    const listItems = props.items.map((item, index) => <li key={index}>{item}</li>);
    return <ul>{listItems}</ul>
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();
