const initialState = [{
	id: 0,
	name: '',
	status: 0,
	sortIndex: 0
}];

export default function getTasksList(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_TASKS_LIST':
	  		return action.list;
	  		break;
	}
	return state;
}