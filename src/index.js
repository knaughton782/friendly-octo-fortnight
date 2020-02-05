import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';



const App = props => {
    
    return <List items={listItems} />
}

// for loop to push items to new array
const items = ['bread', 'milk', 'eggs', 'chocolate'];

const listItems = [];

for(let i = 0; i < items.length; i++) {
    
    listItems.unshift(<li key={i}>{items[i]}</li>); // using unshift to add them in backwards so I can see on the html page that is its the listItems array
    // each item needs a key to indicate the number and array location, The key attribute is used by React to identify which items have been changed or removed, as well as when they're added.
}

const List = props => <ul>{props.items}</ul>;


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();
