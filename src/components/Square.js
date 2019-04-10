import React, { Component } from 'react';

class Square extends Component {
  render() {
    return(
      <div className="squares">{this.props.listSquares}</div>
    )
  }
}

export default Square
