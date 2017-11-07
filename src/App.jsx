import React from 'react';
import { Link } from 'react-router';

import './App.less';
import './styles/base.less';

class App extends React.Component {
	constructor() {
		super();
	}
	handleLogIn() {
		console.log('Login clicked!')
	}
	render() {
		return (
			<div className="app">
				{this.props.children}
			</div>
		);
	}
}

export default App;