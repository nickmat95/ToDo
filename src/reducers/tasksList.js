const initialState = [{
	
}];

export default function getTasksList(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_TASKS_LIST':
	  		return action.list;
	  		break;
	}
	return state;
}