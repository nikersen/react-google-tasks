import React from 'react';
import PropTypes from 'prop-types';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

import Task from './Task.jsx';

import TaskActions from '../actions/TaskActions';
import TaskStore from '../stores/TaskStore';

import './TaskPage.less';

function getStateFromFlux() {
	return {
		task: TaskStore.getTask()
	};
}

class TaskPage extends React.Component {
	constructor() {
		super();
		this.state = {
			...getStateFromFlux(),
		};
		this._onChange = this._onChange.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}
	componentWillMount() {
		TaskActions.loadTask(this.props.routeParams.id);
	}
	componentDidMount() {
		TaskStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		TaskStore.removeChangeListener(this._onChange);
	}
	handleStatusChange(taskId, { isCompleted }) {
		TaskActions.updateTaskStatus({
			taskListId: this.props.params.id,
			taskId: taskId,
			isCompleted: isCompleted
		});
	}
	render() {
		return (
			<div className="task-page">
				<div className="task-page__header">
					<h2 className="task-page__title">List name</h2>
					<div className="task-page__tools">
						<FloatingActionButton mini={true} secondary={true}>
							<ContentAdd />
						</FloatingActionButton>
					</div>
				</div>
				<Divider></Divider>
				<div className="task-page__tasks">
					{
						this.state.task.map(task => 
							<Task 
								key={task.id}
								id={task.id}
								text={task.text}
								isCompleted={task.isCompleted}
								onStatusChange={this.handleStatusChange}
							/>
						)
					}
				</div>
			</div>
		);
	}
	_onChange() {
		this.setState(getStateFromFlux());
	}
}

export default TaskPage;