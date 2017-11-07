import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';

import './AboutPage.less';

class AboutPage extends React.Component {
	constructor() {
		super();
	}

	render() {
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
				</Paper>
			</div>
		);
	}
}

export default AboutPage;