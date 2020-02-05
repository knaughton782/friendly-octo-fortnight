import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';



const App = props => (
       <Employee name="james" age={27} position="coder" />
    )


const Employee = props => (
    <ul style={{margin: 45, fontSize: 26}}>
    <li>{props.name}</li>
    <li>{props.age}</li>
    <li>{props.position}</li>
    </ul>
)

Employee.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    positon: PropTypes.string
}
Employee.defaultProps = {
    position: 'employee'
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


serviceWorker.unregister();
