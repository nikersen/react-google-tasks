import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import './Login.less';

const styles = {
	style: {
		marginTop: 20,
	},
	color: '#fff',
	bg: '#334455'
};

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
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
						style={styles.style}/>
				</div>
				<div className="login-page__img">
					<img src="images/workplace.jpg" />
				</div>
			</div>
		);
	}
}

export default LoginPage;