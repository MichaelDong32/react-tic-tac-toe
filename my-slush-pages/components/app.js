import React, { Component } from 'react'

import Game from './game'

class App extends Component {

  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
    	<div>
	    	<header>
	    	<h1>Tic tac toe app</h1>
	    	</header>
    	<Game />
    	</div>
	)
  }

}

export default App
