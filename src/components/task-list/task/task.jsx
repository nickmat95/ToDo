import React from 'react';
import { connect } from 'react-redux';
import TaskText from './task-text/task-text.jsx';
import EditTaskButton from './edit-task-button/edit-task-button.jsx';
import StatusTaskButton from './status-task-button/status-task-button.jsx';
import DeleteTaskButton from './delete-task-button/delete-task-button.jsx';
import Status from './status/status.jsx';
import './task.css';

class TaskList extends React.Component {
	render() {
	    return (
	    	<div className="task">
	    		<TaskText />
	    		<EditTaskButton />
	    		<StatusTaskButton />
	    		<DeleteTaskButton />
	    		<Status />
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