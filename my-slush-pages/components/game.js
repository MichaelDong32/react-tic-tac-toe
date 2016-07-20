import React, { Component } from 'react'

import Square from './square'

export default class Game extends Component {
	constructor (props) {
		super(props)

		this.state = {
			board: new Array(9).fill(''),
//history of moves goes into array
			history: []
		}
	}
//select player

	getPlayer () {
		let moves = this.state.board.filter((s) => s !== '').length

		return (moves % 2 === 0) ? 'x' : 'o'
	}

	makeMove (square) {
		let player = this.getPlayer()
		let board = this.state.board.map((mark, idx) => {
			return (idx === square) ? player : mark
		})
{/*sets new state after each move*/}
		this.setState({ 
			board: board,
			history: this.state.history.concat(square)
		})
	}


	render () {
		let board = this.state.board.map((mark, idx) => {
			return <Square key={idx} index={idx}
				clickCallback={this.makeMove.bind(this)}>{mark}</Square>
		})

		return <div className='board'>{board}</div>
	}
}
