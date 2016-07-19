import React, { Component } from 'react'

export default class Square extends Component {
	handleClick (event){
		this.props.clickCallback(this.props.index)
	}

	render () {
		return <div className="empty" onClick={this.handleClick.bind(this)} />
	}
}