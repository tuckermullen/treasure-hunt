import React, { Component } from 'react';
import Square from './Square'
import tree from '../assets/tree.png'
import treasure from '../assets/treasure.png'
import question from '../assets/question.png'
// import bomb from './assets/bomb.png'


class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            spaces: Array(9).fill(0),
            hidden: false,
            tries: 3
        }
    }

    checkSquare = (e) => {
      const tries = this.state.tries
      let clickedSquare = e.currentTarget
      let hidden = this.state.hidden
      let spaces = this.state.spaces

      if (tries !== 0) {

        let treasure = Math.floor(Math.random() * spaces.length)

        if (!hidden) {
          spaces[treasure] = 1
          this.setState({ hidden: true })
        }

        if (spaces[clickedSquare.id] !== 1) {
          spaces[clickedSquare.id] = "Tree"
          this.setState({tries: this.state.tries - 1})
        } else {
          spaces[clickedSquare.id] = "Treasure"
          alert("You found the treasure! You win!")
        }

        this.setState({spaces: spaces})
      }

      if (tries === 0) {
        alert("You've ran out of tries! Game over!")
        this.setState({spaces: Array(9).fill(0), hidden: false, tries: 3})
      }
    }

    restartGame = () => {
      this.setState({tries: 3, spaces: Array(9).fill(0), hidden: false})
    }

  render() {
    const spaces = this.state.spaces
    const tries = this.state.tries

    const treasureBoard = spaces.map(square => {
      return (square === "Tree") ? tree : (square === "Treasure") ? treasure : question
    })

    const listSquares = treasureBoard.map((space, index) =>
      <div className="square"
      id={index}
      key={index}
      onClick={this.checkSquare}>
      <img src={space} alt="space" />
      </div>)

    return(
      <div className="board">
        <p className="tries"><strong>Remaining Tries: {tries}</strong></p>
        <button onClick={this.restartGame}>Start Over</button>
        <Square listSquares={listSquares} />
      </div>
    )
  }
}

export default Board;
