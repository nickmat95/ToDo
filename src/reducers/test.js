const initialState = '';

export default function test(state = initialState, action) {
	switch(action.type) {
	  	case 'TEST':
	  		return 'test';
	  		break;
	}
	return state;
}