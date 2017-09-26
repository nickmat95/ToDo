import React from 'react';
import { connect } from 'react-redux';
import './add-button.css';

class AddButton extends React.Component {
	render() {
	    return (
	    	<div className="addTaskButton">
	    		<button type="button">Add task</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(AddButton);