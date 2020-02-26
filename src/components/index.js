import React from 'react';

class NumberOfStudents extends React.Component {
    constructor(props) {
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
        this.setState({ enrolled: this.state.enrolled + parseInt(this.state.addToEnrolled) });
    }
    incrementWaitlisted() {
        this.setState({ waitlisted: this.state.waitlisted + parseInt(this.state.addToWaitlist) });
    }

    render() {
        return (
            <div className='divPadding'>
                <h1>Enrolled Students: {this.state.enrolled}</h1>
                <button className='btn' onClick={this.incrementEnrolledByOne.bind(this)}>Increment Enrolled By One</button>
                <hr />
                <button className='btn' onClick={this.decrementEnrolledByOne.bind(this)}>Decrement Enrolled By One</button>
                <hr />
                <input
                    type="number"
                    onChange={event => this.setState({ addToEnrolled: event.target.value })}
                    value={this.state.addToEnrolled}
                />
                <button className='btn' onClick={this.incrementEnrolled.bind(this)}>Add Amount to Enrolled</button>
                <hr />

                <h1>Waitlisted Students: {this.state.waitlisted}</h1>
                <button className='btn' onClick={this.incrementWaitlistedByOne.bind(this)}>Increment Waitlisted By One</button>
                <hr />
                <button className='btn' onClick={this.decrementWaitlistedByOne.bind(this)}>Decrement Waitlisted By One</button>
                <hr />
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

export default NumberOfStudents;