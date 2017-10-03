const initialState = [{
	id: 0,
	name: '',
	status: 0,
	sort_index: 0,
}];

export default function getTasksList(state = initialState, action) {
	let result = Object.assign([], state);
	switch(action.type) {
	  	case 'GET_TASKS_LIST':
	  		return action.list;
	  	case 'ADD_TASK':
	  		result.push(action.task);
	  		return result.map(task => task);
	  	case 'DELETE_TASK':
			result = result.filter(task => task.id !== action.id);
	  		return result.map(task => task);
	  	default:
	  		return state
	}
}