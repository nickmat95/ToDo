const initialState = '';

export function getAddingTaskTitle(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_ADDING_TITLE':
	  		return action.title;
	  	default:
	  		return state
	}
}

export function getStatus(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_STATUS':
	  		return {
	  			id: action.id,
	  			status: action.status
	  		};
		default:
	  		return state
	}
}

export function getEditButtonStatus(state = 'edit', action) {
	switch(action.type) {
	  	case 'EDIT_BUTTON_STATUS':
	  		return {
	  			id: action.id,
	  			status: action.buttonStatus
	  		};
	  	default:
	  		return state
	}
}

export function getTaskText(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_TASK_TEXT':
	  		return {
	  			id: action.id,
	  			text: action.text
	  		};
	  	default:
	  		return state
	}
}