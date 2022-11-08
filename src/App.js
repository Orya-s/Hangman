import React, { Component } from 'react';
import Letters from './components/Letters'
import Solutioin from './components/Solution'
import Score from './components/Score'
import './App.css';

const SOLUTION = "WORD"
const HINT = "My hint"
const GOOD_GUESS_SCORE = 5
const BAD_GUESS_SCORE = 20


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: SOLUTION,
        hint: HINT
      },
      score: 100,
      rightAnswers: 0,
      gameOver: false
    }
  }

  generateLetterStatuses = () => {
    let lettersInit = {} 
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    alphabet.map(a => lettersInit[a] = false)
    return lettersInit
  }

  selectLetter = letter => {
    if(!this.state.gameOver){
      if(!this.state.letterStatus[letter]) {
        let updatedLetters = {...this.state.letterStatus}
        updatedLetters[letter] = true
    
        this.setState({
          letterStatus: updatedLetters
        }, this.updateScore(letter))
      }
    }
  }

  updateScore = letter => {
    let answer = this.state.solution.word
    if(answer.includes(letter)) {
      this.setState({
        score: this.state.score + GOOD_GUESS_SCORE,
        rightAnswers: this.state.rightAnswers + 1
      }, this.checkGameStatus())
    }
    else {
      this.setState({score: this.state.score - BAD_GUESS_SCORE}, this.checkGameStatus())
    }
  }

  checkGameStatus = () => {
    if(this.state.rightAnswers == this.state.solution.word.length) {
      alert("Congrats! You won!")
      this.setState({gameOver: true})
    }
    if(this.state.score <= 0) {
      alert("Game over :( Refresh the page to try Again!")
      this.setState({gameOver: false})
    }
  }

  render() { 
    
    return (
      <div className='app'>
        
        <Score score={this.state.score}/>
        <Solutioin letterStatus={this.state.letterStatus} solution={this.state.solution}/> 
        <div>Available Letters-</div>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/> 
      </div>
    )
  }
}
 
export default App;
