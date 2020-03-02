import React from 'react';
import '../styles/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Topic = ({ match }) => (
    <div>
        <Header />
        <h3>{match.params.topicId}</h3>
        <Footer />
    </div>
)
export default Topic;