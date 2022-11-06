import React, { Component } from 'react';

class Letter extends Component {
    constructor() {
        super();
    }
    
    render() { 
        return (
            <span className={this.props.className}>{this.props.data}</span>
        );
    }
}
 
export default Letter;