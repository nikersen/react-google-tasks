import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ListIcon from 'material-ui/svg-icons/action/list';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FolderIcon from 'material-ui/svg-icons/file/folder';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

import TaskListsActions from '../actions/TaskListsActions';
import TaskListsStore from '../stores/TaskListsStore';
import TaskListCreateModal from './TaskListCreateModal.jsx';

import './TaskListsPage.less';

function getStateFromFlux() {
	return {
		taskLists: TaskListsStore.getTaskLists()
	};
}

class TaskListsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			...getStateFromFlux(),
			isCreatingTaskList: false
		}
		this._onChange = this._onChange.bind(this);
		this.handleAddTaskList = this.handleAddTaskList.bind(this);
		this.handleTaskListSubmit = this.handleTaskListSubmit.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	componentWillMount() {
		TaskListsActions.loadTaskLists();
	}
	componentDidMount() {
		TaskListsStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		TaskListsStore.removeChangeListener(this._onChange);
	}
	handleAddTaskList() {
		this.setState({ isCreatingTaskList: true });
	}
	handleClose() {
		this.setState({ isCreatingTaskList: false });
	}
	handleTaskListSubmit(taskLists) {
		TaskListsActions.createTaskList(taskLists);

		this.setState({ isCreatingTaskList: false });
	}
	render() {
		const { router } = this.context;
		return (
			<div className="task-lists">
				<div className="task-lists__menu">
					<List className="task-lists__list">
						<h3 className="task-lists__title">Almost Google Tasks</h3>
						<Divider></Divider>
						<List className="task-lists__list">
							<ListItem
								leftIcon={<HomeIcon />}
								primaryText="Home"
								onClick={router.push.bind(null, '/lists')}
							/>
							<ListItem
								leftIcon={<ListIcon />}
								primaryText="About"
								onClick={router.push.bind(null, '/about')}
							/>
						</List>
						<Divider></Divider>
						<List className="task-lists__list">
							<Subheader>Task Lists</Subheader>
							{
								this.state.taskLists.map(list =>
									<ListItem
										key={list.id}
										leftIcon={<FolderIcon />}
										primaryText={list.name}
										onClick={router.push.bind(null, `/lists/${list.id}`)}
									/>
								)
							}
							<ListItem
								leftIcon={<ContentAdd />}
								primaryText="Create new list"
								onClick={this.handleAddTaskList}
							/>
						</List>
						<Divider></Divider>
						<List className="task-lists__list">
							<ListItem
								leftIcon={<ExitIcon />}
								primaryText="Log out"
								onClick={this.handleLogOut}
							/>
						</List>
					</List>
				</div>
				<div className="task-lists__tasks">
					{this.props.children}
				</div>
				<TaskListCreateModal 
					isOpen={this.state.isCreatingTaskList}
					onClose={this.handleClose}
					onSubmit={this.handleTaskListSubmit}
				/>
			</div>
		);
	}
	_onChange() {
		this.setState(getStateFromFlux());
	}
}

TaskListsPage.contextTypes = {
	router: PropTypes.object.isRequired
}

export default TaskListsPage;