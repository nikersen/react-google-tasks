import React from 'react';

import Checkbox from 'material-ui/Checkbox';

class Task extends React.Component {
	constructor() {
		super();

		this.handleCheck = this.handleCheck.bind(this);
	}
	handleCheck() {
		this.props.onStatusChange(this.props.id, {
			isCompleted: !this.props.isCompleted
		});
	}
	render() {
		return (
			<div className="task">
				<Checkbox
					label={this.props.text}
					className="task__checkbox"
					checked={this.props.isCompleted}
					onCheck={this.handleCheck}
				/>
			</div>
		);
	}
}

export default Task;