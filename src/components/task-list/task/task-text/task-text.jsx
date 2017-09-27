import React from 'react';
import { connect } from 'react-redux';
import './task-text.css';

class TaskText extends React.Component {
	render() {
	    return (
	    	<div className="taskText">
	    		<input type="text" value={this.props.text} disabled="disabled" />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(TaskText);