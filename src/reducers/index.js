import { combineReducers } from 'redux';

import getTasksList from './tasksList.js';
import { getAddingTaskTitle, getStatus } from './actions.js';

export default combineReducers({
	getTasksList,
	getAddingTaskTitle,
	getStatus,
});