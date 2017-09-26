import React from 'react';
import { connect } from 'react-redux';
import './add-field.css';

class AddField extends React.Component {
	render() {
	    return (
	    	<div className="addTaskField">
	    		<input type="text" placeholder="enter task.." />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(AddField);