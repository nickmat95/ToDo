import { combineReducers } from 'redux';

import tasksList from './tasksList.js';
import { getAddingTaskTitle, getStatus } from './actions.js';

export default combineReducers({
	tasksList,
	getAddingTaskTitle,
	getStatus,
});