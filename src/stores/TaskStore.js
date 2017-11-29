import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants'

const CHANGE_EVENT = 'change';

let _task = [];
let _error = null;

function formatTask(data) {
	return {
		id: data.id,
		text: data.title,
		notes: data.notes,
		dueTime: data.due ? new Date(data.due) : '',
		isCompleted: data.status === 'completed',
		position: data.position
	}
}

const TaskStore = Object.assign({}, EventEmitter.prototype, {
	getTask() {
		return _task;
	},
	emitChange() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(action => {
	console.info(action.type, action);

	switch(action.type) {
		case AppConstants.TASK_LOAD_SUCCESS: {
			_task = action.items.map(formatTask);

			TaskStore.emitChange();
			break;
		}
		case AppConstants.TASK_LOAD_FAIL: {
			_task = [];
			_error = action.error;

			TaskStore.emitChange();
			break;
		}
		case AppConstants.TASK_UPDATE_SUCCESS: {
			const updatedTaskIndex = _task.findIndex(task => task.id === action.taskId);
			_task[updatedTaskIndex] = formatTask(action.task);

			TaskStore.emitChange();
			break;
		}
		case AppConstants.TASK_UPDATE_FAIL: {
			_task = [];
			_error = action.error;

			TaskStore.emitChange();
			break;
		}
		default: {}
	}
});

export default TaskStore;
