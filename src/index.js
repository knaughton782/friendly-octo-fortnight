import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import './index.css';
// import App from './App';

const App = props => {
    return <NumberOfStudents />;
}

class NumberOfStudents extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            enrolled: 567,
            waitlisted: 23,
            addToWaitlist: 0,
            addToEnrolled: 0
        }
    }

    incrementEnrolledByOne() {
        this.setState({ enrolled: this.state.enrolled + 1 });
    }
    decrementEnrolledByOne() {
        this.setState({ enrolled: this.state.enrolled - 1 });
    }
    incrementWaitlistedByOne() {
        this.setState({ waitlisted: this.state.waitlisted + 1 });
    }
    decrementWaitlistedByOne() {
        this.setState({ waitlisted: this.state.waitlisted + 1 });
    }
    incrementEnrolled() {
        this.setState({ enrolled: this.state.enrolled + parseInt(this.state.addToEnrolled)});
    }
    incrementWaitlisted() {
        this.setState({ waitlisted: this.state.waitlisted + parseInt(this.state.addToWaitlist) });
    }

    render() {
        return (
            <div className='divPadding'>
                <h1>Enrolled Students: {this.state.enrolled}</h1>
                <button className='btn' onClick={this.incrementEnrolledByOne.bind(this)}>Increment Enrolled By One</button>

                <button className='btn' onClick={this.decrementEnrolledByOne.bind(this)}>Decrement Enrolled By One</button>

                <input 
                    type="number" 
                    onChange={event => this.setState({ addToEnrolled: event.target.value})}
                    value={this.state.addToEnrolled}
                    />
                <button className='btn' onClick={this.incrementEnrolled.bind(this)}>Add Amount to Enrolled</button>




                <h1>Waitlisted Students: {this.state.waitlisted}</h1>
                <button className='btn' onClick={this.incrementWaitlistedByOne.bind(this)}>Increment Waitlisted By One</button>

                <button className='btn' onClick={this.decrementWaitlistedByOne.bind(this)}>Decrement Waitlisted By One</button>

                <input
                    type="number"
                    onChange={event => this.setState({ addToWaitlist: event.target.value })}
                    value={this.state.addToWaitlist}
                />
                <button className='btn' onClick={this.incrementWaitlisted.bind(this)}>Add Amount to Waitlisted</button>

            
            
            </div>
        )
    }


}



    ReactDOM.render(<App />, document.getElementById('root'));


//serviceWorker.unregister();
