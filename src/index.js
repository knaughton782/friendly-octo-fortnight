import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';



const App = props => {
    const user = {
        name: 'Harry Potter',
        address: 'Hogwarts',
        broom: 'Firebolt'
    }
    return <User person={user} items='Robe, cauldron, wand' amount={100} />
}

const User = props => (
    <ul>
        <li>Name: {props.person.name}</li>
        <ul>
            <li>Address: {props.person.address}</li>
            <li>Broom: {props.person.broom}</li>
        </ul>
        <li>Items: {props.items}</li>
        <li>Paid: {String(props.paid)}</li>
        <li>Amount: {props.amount}</li>
        <li>Shipped: {String(props.shipped)}</li>
    </ul>
);

User.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        broom: PropTypes.string.isRequired
    }),
    items: PropTypes.string.isRequired,
    paid: PropTypes.bool,
    amount: PropTypes.number.isRequired,
    shipped: PropTypes.bool
}

User.defaultProps = {
    paid: false,
    shipped: false
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
);


serviceWorker.unregister();
