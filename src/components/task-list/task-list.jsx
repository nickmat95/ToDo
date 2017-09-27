import React from 'react';
import { connect } from 'react-redux';
import Task from './task/task.jsx';
import './task-list.css';

class TaskList extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	columnsList: this.props.taskList,
	    };
	}

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
		taskList: state.getTasksList
	}),
	dispatch => ({

	})
)(TaskList);