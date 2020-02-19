import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './App';

class Text extends React.Component {
    constructor() {
        //won't use props in this component because state is managing everything
        super(); //creates an instance of the base class called component
        //super is required before you can set the state of a component
        this.state = {
            text: 'don\'t like Steve whatshisname'
            //this is the default state
        }
    }
    update(event) {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        //jsx to render to the dom
        return (
            <div>
                <input style={{ margin: 100 + 'px' }} type="text" onChange={this.update.bind(this)} />
                <h1 style={{ margin: 100 + 'px' }}>{this.state.text}</h1>
            </div>
            //bind is required so it stays into this local scope
        )
    }
}


ReactDOM.render(<Text />, document.getElementById('root'));


//serviceWorker.unregister();
