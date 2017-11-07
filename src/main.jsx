import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import api from './api';

import App from './App.jsx';
import Login from './components/Login.jsx';
import AboutPage from './components/AboutPage.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import TaskListsPage from './components/TaskListsPage.jsx';
import TaskPage from './components/TaskPage.jsx';
import Message from './components/Task.jsx';
import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';

import './styles/base.less';

window.handleGoogleApiLoader = () => {
	SessionActions.authorize(true, renderApp);
}

function renderApp() {
	ReactDOM.render(
		<MuiThemeProvider>
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<Route path='/login' component={Login} />
					<Route component={LoggedInLayout} onEnter={requireAuth}>
						<Route path='/about' component={AboutPage} />
						<Route path='/lists' component={TaskListsPage}>
							<Route path='/lists/:id' component={TaskPage} />
						</Route>
					</Route>
				</Route>
			</Router>
		</MuiThemeProvider>,
		document.getElementById('root')
	);
}

function requireAuth(nextState, replace) {
	if (!SessionStore.isLoggedIn()) {
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		});
	}
}
