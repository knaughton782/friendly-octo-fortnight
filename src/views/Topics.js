import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Topic from '../components/Topic';
import { Route, Link } from 'react-router-dom';


const Topics = ({ match }) => (
    <div>
        <Header />

        <h1 className='center'>Topics</h1>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => <h3>Please select a topic:</h3>} />
        <ul>
            <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
            <li><Link to={`${match.url}/rendering`}>Components</Link></li>
            <li><Link to={`${match.url}/rendering`}>Props vs State</Link></li>
        </ul>
        <Footer />
    </div>

)

export default Topics;
