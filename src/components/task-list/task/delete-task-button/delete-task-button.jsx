import React from 'react';
import { connect } from 'react-redux';
import './delete-task-button.css';

class DeleteTaskButton extends React.Component {
	render() {
	    return (
	    	<div className="deleteButton">
	    		<button type="button">X</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DeleteTaskButton);