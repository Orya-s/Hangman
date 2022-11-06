import React, { Component } from 'react';
import Letters from './components/Letters'
import Solutioin from './components/Solution'
import Score from './components/Score'
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      letterStatus: {},
      solution: {
        word: "WORD",
        hint: "hint"
      },
      score: 5
    }
  }

  generateLetterStatuses() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    alphabet.map(a => this.state.letterStatus[a] = false)
    return this.state.letterStatus
  }

  render() { 
    this.generateLetterStatuses()
    
    return (
      <div>
        
        <Score score={this.state.score}/>
        <Solutioin letterStatus={this.state.letterStatus} solution={this.state.solution}/> 
        <div>Available Letters</div>
        <Letters letterStatus={this.state.letterStatus}/> 
      </div>
    )
  }
}
 
export default App;
