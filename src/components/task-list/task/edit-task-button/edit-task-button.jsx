import React from 'react';
import { connect } from 'react-redux';
import './edit-task-button.css';

class EditTaskButton extends React.Component {
	render() {
	    return (
	    	<div className="editButton">
	    		<button type="button">edit</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(EditTaskButton);