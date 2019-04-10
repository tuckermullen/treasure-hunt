import React, { Component } from 'react';
import Board from './components/Board'
import Square from './components/Square'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <h2><strong>Treasure Hunt</strong></h2>
            <Board />
        </div>
    );
  }
}

export default App;
