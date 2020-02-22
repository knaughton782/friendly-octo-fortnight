import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import './index.css';
// import App from './App';

const App = (props) => {
    return <NumberEnrolled />;
}


class NumberEnrolled extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            waitlist: 7485895,
            enrolled: 2039845,
            addToWaitlist: 0,
            addToEnrolled: 0
        };
    }

    incrementWaitlistByOne() {
        this.setState({
            waitlist: this.state.waitlist + 1
        });
    }

    incrementEnrolledByOne() {
        this.setState({
            enrolled: this.state.enrolled + 1
        })
    }
    incrementWaitlistByLots() {
        this.setState({
            waitlist: this.state.waitlist + parseInt(this.state.addToWaitlist)
        });

        // incrementWaitlistByLots() {
        //     this.setState({
        //         waitlist: this.state.waitlist + parseInt(this.state.addToWaitlist)
        //     });
        }

        render() {
            return (
                <div>
                    <h3>Waitlisted Students: {this.state.waitlist}</h3>
                    <button onClick={this.incrementWaitlistByOne.bind(this)}>Add 1 to Waitlist</button>

                    <input type="number"
                        onChange={event => this.setState({ addToWaitlist: event.target.value })}
                        value={this.state.addToWaitlist}
                    />
                    <button onClick={this.incrementWaitlistByLots.bind(this)}>Add Multiple to Waitlist</button>


                    <h3>Enrolled Students: {this.state.enrolled}</h3>
                    <button onClick={this.incrementEnrolledByOne.bind(this)}>Add 1 to Enrolled</button>



                </div>
            );
        }
    }



    ReactDOM.render(<App />, document.getElementById('root'));


//serviceWorker.unregister();
