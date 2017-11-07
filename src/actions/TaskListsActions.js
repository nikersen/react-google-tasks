import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants'

import api from '../api';

const TaskListsActions = {
	loadTaskLists() {
		api.listTasksLists()
		.then(data => {
			AppDispatcher.dispatch({
				type: AppConstants.TASK_LISTS_LOAD_SUCCESS,
				items: data.items
			});
		})
		.catch(err => {
			AppDispatcher.dispatch({
				type: AppConstants.TASK_LISTS_LOAD_FAIL,
				error: err
			});
		});
	}
}

export default TaskListsActions;