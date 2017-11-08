import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class TaskListCreateModal extends React.Component {
	constructor() {
		super();
		this.state = {
			name: ''
		}
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleClose() {
		const { onClose } = this.props;
		this.setState({ name: '' });

		if (onClose) onClose();
	}
	handleSubmit() {
		const { onSubmit } = this.props;

		if (onSubmit) onSubmit({ name: this.state.name });

		this.setState({ name: '' });
	}
	handleTextChange(e) {
		this.setState({
			name: e.target.value
		});
	}
	render() {
		const { name } = this.state;
		const { isOpen } = this.props;
		const actions = [
			<FlatButton
				label="Cancel"
				onClick={this.handleClose} 
			/>,
			<FlatButton
				primary
				label="Submit"
				disabled={!name}
				onClick={this.handleSubmit}
			/>
		];

		return (
			<Dialog className="task-list-modal"
				contentStyle={{maxWidth: 400}}
				actions={actions}
				open={isOpen}
				onRequestClose={this.handleClose}
			>
				<h3 className="task-list-modal__title">Add task list</h3>
				<TextField
					key={1}
					fullWidth
					ref={c => this.taskInput = c}
					value={name}
					onChange={this.handleTextChange}
					hintText="e.g. movies to watch"
					floatingLabelText="Enter task list name"></TextField>
			</Dialog>
		);
	}
}

export default TaskListCreateModal;