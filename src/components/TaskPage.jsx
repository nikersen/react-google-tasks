import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

import Task from './Task.jsx';

import './TaskPage.less';

class TaskPage extends React.Component {
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
					TASKS
				</div>
			</div>
		);
	}
}

export default TaskPage;