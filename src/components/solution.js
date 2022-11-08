/* This component will display empty spaces ( _ _ _ _ ) representing the letters the user has to guess.
It will also display the hint for the word to be guessed. */ 
import React, { Component } from 'react';
import Letter from './Letter';

class Solutioin extends Component {
    constructor() {
        super();
    }
    
    render() { 
        let solution = this.props.solution.word.split("");
        let letterStatus = this.props.letterStatus;
        let uniqeKey = 0;

        return (
            <div>
                <div>
                    {solution.map(w => letterStatus[w] ? <Letter key={w} data={w}/> : <Letter key={uniqeKey++} data={'__ '} />)}
                </div>
                <div>
                    Hint: {this.props.solution.hint}
                </div>
            </div>
        );
    }
}
 
export default Solutioin;