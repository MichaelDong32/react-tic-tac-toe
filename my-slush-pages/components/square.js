import React, { Component } from 'react'

export default class Square extends Component {
	handleClick (event){
	// can only click on free square
		if (this.props.children === '') {
		this.props.clickCallback(this.props.index)
		}
	}

	render () {
		let mark = this.props.children
		let status = (mark === '') ? 'empty' : `player-${mark}`

		//render either x or y

		return (
			<div className={status} 
			onClick={this.handleClick.bind(this)}>{this.props.children}
			</div>
			)
	}
}