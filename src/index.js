import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './styles/index.css';
// import App from './components/App';
import Home from './views/Home';
import About from './views/About';
import Topics from './views/Topics';

const App = () => (

    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
