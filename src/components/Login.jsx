import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

import SessionActions from '../actions/SessionActions';
import SessionStore from '../stores/SessionStore';

import './Login.less';

const styles = {
	color: '#fff',
	bg: '#334455'
};

function getStateFromFlux() {
	return {
		isLoggedIn: SessionStore.isLoggedIn()
	};
}

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = getStateFromFlux();
		this._onChange = this._onChange.bind(this);
		// this.handleLogIn = this.handleLogIn.bind(this);
	}

	componentDidMount() {
		SessionStore.addChangeListener(this._onChange);
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextState.isLoggedIn) {
			const { location } = this.props;

			if (location.state && location.state.nextPathname)
				this.context.router.replace(location.state.nextPathname);
			else
				this.context.router.replace('/lists');
		}
	}

	componentWillUnmount() {
		SessionStore.removeChangeListener(this._onChange);
	}

	handleLogIn() {
		SessionActions.authorize();
	}

	render() {
		console.log(this.state);
		return (
			<div className="login-page">
				<div className="login-page__info">
					<div className="title">React Google Tasks</div>
					<div className="desc">Organise your life!</div>
					<RaisedButton 
						className="btn" 
						backgroundColor={styles.bg} 
						label="Log In with Google" 
						labelColor={styles.color}
						onClick={this.handleLogIn}
						/>
				</div>
				<div className="login-page__img">
					<img src="images/workplace.jpg" />
				</div>
			</div>
		);
	}

	_onChange() {
		this.setState(getStateFromFlux());
	}
}

LoginPage.contextTypes = {
	router: PropTypes.object.isRequired
}

export default LoginPage;