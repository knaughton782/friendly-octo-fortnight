import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import './styles/index.css';
import App from './components/App';
import Home from './views/Home';
import About from './views/About';
import Topics from './views/Topics';

const Index = ({pathname}) => {
    switch (pathname) {
        case '/about':
            return <About />;
            break;
        case '/topics':
            return <Topics/>;
            break;
        default:
            return <Home />;
        
    }
}

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname}/>, document.getElementById('root'));

// listener to change the pathname variable
window.addEventListener('popstate', () => pathname = window.location.pathname);
// popstate event
