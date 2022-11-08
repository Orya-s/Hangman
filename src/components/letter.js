import React, { Component } from 'react';

class Letter extends Component {
      
    clickedLetter = () => {
        this.props.selectLetter(this.props.data)
    }

    render() { 
        return (
            <span className={this.props.className} onClick={this.clickedLetter}>{this.props.data}</span>
        );
    }
}
 
export default Letter;