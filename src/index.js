import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './App';

const App = props => {
    return (
        <div>
        <Hello name='Nicki' />
        </div>
    )
}
class Hello extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello, {this.props.name}!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));



//serviceWorker.unregister();
