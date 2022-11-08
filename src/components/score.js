/* This component will keep track of how many guesses the user has left. */
import React, { Component } from 'react';

class Score extends Component {
    constructor() {
        super();
    }

    render() { 
        return (
            <div id='score'>{this.props.score}</div>
        );
    }
}

export default Score;