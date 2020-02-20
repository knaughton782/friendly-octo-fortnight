import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './App';


class BankAcct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acctBal: 3456.89,
            addAmt: 0
        }
    }
    increment() {
        this.setState({ acctBal: this.state.acctBal + this.state.addAmt})
    }

    decrement() {

    }

    render() {
        return (
            <div style={{margin: 100 +'px'}}>
            <h3>Account Balance: ${this.state.acctBal}</h3>
            <input type="number"
                onChange={event => this.setState({addAmt: parseInt(event.target.value)})}
                value={this.state.addAmt}/>

            <button onClick={this.increment.bind(this)} className="btn">Increase Balance</button>
            </div>
        )
    }
}




ReactDOM.render(<BankAcct />, document.getElementById('root'));


//serviceWorker.unregister();
