/* This component will load all the available letters. */
import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component { 

    render() {
        let letters = Object.keys(this.props.letterStatus)
        let letterStatus = this.props.letterStatus;
        let classNames = {true: "selected-letters", false: "letters"}

        return (
            letters.map(l => <Letter className={classNames[letterStatus[l]]} key={l} data={l} selectLetter={this.props.selectLetter}/>)
        );
    }
}
 
export default Letters; 