import React from 'react';
import { connect } from 'react-redux';
import Task from './task/task.jsx';
import './task-list.css';

class TaskList extends React.Component {
	render() {
	    return (
	    	<div>
	    		<Task />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(TaskList);