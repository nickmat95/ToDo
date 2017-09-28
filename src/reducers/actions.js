const initialState = '';

export function getAddingTaskTitle(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_ADDING_TITLE':
	  		return action.title;
	  		break;
	}
	return state;
}

export function getStatus(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_STATUS':
	  		return {
	  			id: action.id,
	  			status: action.status
	  		};
	  		break;
	}
	return state;
}