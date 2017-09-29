import React from 'react';
import { connect } from 'react-redux';
import { baseUrl } from '../../../../../base-url.js';
import ReactResource from 'react-resource';
import './edit-task-button.css';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

class EditTaskButton extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		   	buttonStatus: 'edit',
		}

		this.changeTask = this.changeTask.bind(this);
	}

	changeTask() {
		let newButtonStatus = (this.state.buttonStatus === 'edit') ? 'save' : 'edit';
		let taskName = (this.props.taskText) ? this.props.taskText.text : this.props.name;

		let taskData = {id: this.props.taskId, name: taskName, status: this.props.status, sortIndex: this.props.sortIndex};
		const tasks = new TaskResource(taskData);

		if (newButtonStatus === 'edit') {
			tasks.$update()
				.catch(err => console.log('error:', err));
		}

		this.setState({
			buttonStatus: newButtonStatus,
		});

		this.props.getEditButtonStatus(newButtonStatus, this.props.taskId);
	}

	render() {
	    return (
	    	<div className="editButton">
	    		<button type="button" disabled={this.props.status === 1} onClick={this.changeTask}>{this.state.buttonStatus}</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		taskText: state.getTaskText,
	}),
	dispatch => ({
		getEditButtonStatus: (buttonStatus, id) => dispatch({ type: 'EDIT_BUTTON_STATUS', buttonStatus, id }),
	})
)(EditTaskButton);