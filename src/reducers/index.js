import { combineReducers } from 'redux';

import tasksList from './tasksList.js';
import { getEditButtonStatus, getAddingTaskTitle, getStatus, getTaskText } from './actions.js';

export default combineReducers({
	tasksList,
	getAddingTaskTitle,
	getStatus,
	getEditButtonStatus,
	getTaskText,
});