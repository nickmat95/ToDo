import React from 'react';
import { connect } from 'react-redux';
import './status-task-button.css';

class StatusTaskButton extends React.Component {
	render() {
	    return (
	    	<div className="statusButton">
	    		<input type="checkbox" />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(StatusTaskButton);