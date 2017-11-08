import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './AboutPage.less';

class AboutPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { router } = this.context;
		return (
			<div className="about-page">
				<Paper
					zDepth={1}
					className="about-page__content"
					style={
						{
							width: '400px',
							margin: '0 auto',
							padding: '20px'
						}
					}
				>
					<h2>React Google Tasks</h2>
					<p>Yoyooyoyoyoyo</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam excepturi sint quibusdam vitae, quos veritatis.</p>
					<RaisedButton 
						label="Back" 
						primary={true} 
						style={{
							'marginTop': '20px'
						}}
						onClick={router.push.bind(null, '/lists')}
					/>
				</Paper>
			</div>
		);
	}
}

AboutPage.contextTypes = {
	router: PropTypes.object.isRequired
}

export default AboutPage;