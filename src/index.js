import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = props => (
    <div>
        <h1>Hello {props.name}!!!</h1>
    </div>
)

const App = props => {
    return (
        <div>
            <Hello name="Jamison" />
            <Hello name="Brittney" />
            <Hello name="Miss Amazing" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


serviceWorker.unregister();
