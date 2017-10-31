import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App.jsx';
import Login from './components/Login.jsx';

import './styles/base.less';

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<Route path='/login' component={Login} />
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('root')
);