import React from 'react';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Task from './Task.jsx';

class TaskPage extends React.Component {
	render() {
		console.log('TaskPage');
		return (
			<div className="task-page">
				<div className="task-page__header">
					<h2 className="task-page__title">List name</h2>
					<div className="taks-page__tools">
						<IconButton>
							<ContentAdd></ContentAdd>
						</IconButton>
					</div>
				</div>

				<div className="taks-page__tasks">
					TASKS
				</div>
			</div>
		);
	}
}

export default TaskPage;