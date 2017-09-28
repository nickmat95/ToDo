const initialState = [{
	id: 0,
	name: '',
	status: 0,
	sortIndex: 0
}];

export default function tasksList(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_TASKS_LIST':
	  		state = action.list;
	  		return action.list;
	  	case 'ADD_TASK':
	  		state.push(action.task);
	  		return state.map(task => task);
	  	default:
	  		return state
	}
}