import React, { Component } from 'react'

import Square from './square'

export default class Game extends Component {
	makeMove (idx) {
		console.log('Square ${idx} clicked')
	}
	
	render () {
		let board = new Array(9).fill('').map((_,idx) => {
			return <Square 
				key={idx}
				index={idx}
				clickCallback={this.makeMove.bind(this)}
			/>
		})

		return <div className='board'>{board}</div>
	}
}
