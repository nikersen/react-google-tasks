import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants'

import api from '../api';

const TaskActions = {
	loadTask(taskListId) {
		api.listTask(taskListId)
		.then(data => {
			AppDispatcher.dispatch({
				type: AppConstants.TASK_LOAD_SUCCESS,
				items: data.items || []
			});
		})
		.catch(err => {
			AppDispatcher.dispatch({
				type: AppConstants.TASK_LOAD_FAIL,
				error: err
			});
		});
	},
	updateTaskStatus(params) {
		api.updateTask({
			taskListId: params.taskListId,
			taskId: params.taskId,
			status: params.isCompleted ? 'completed' : 'needsAction'
		})
		.then(data => {
			AppDispatcher.dispatch({
				type: AppConstants.TASK_UPDATE_SUCCESS,
				task: data,
				taskId: params.taskId
			});
		})
		.catch(err => {
			AppDispatcher.dispatch({
				type: AppConstants.TASK_UPDATE_FAIL,
				error: err
			});
		});
	}
}

export default TaskActions;