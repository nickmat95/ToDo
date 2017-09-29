import React from 'react';
import { connect } from 'react-redux';
import { baseUrl } from '../../../../../base-url.js';
import ReactResource from 'react-resource';
import './delete-task-button.css';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

class DeleteTaskButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.deleteComment = this.deleteComment.bind(this);
	}

	deleteComment() {
		let taskData = {id: this.props.taskId}
		const tasks = new TaskResource(taskData);

		tasks.$delete()
			.then(taskId => this.props.tasksList(taskId.id))
			.catch(err => console.log('error:', err));
	}

	render() {
	    return (
	    	<div className="deleteButton">
	    		<button type="button" onClick={this.deleteComment}>X</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		tasksList: id => dispatch({ type: 'DELETE_TASK', id }),
	})
)(DeleteTaskButton);