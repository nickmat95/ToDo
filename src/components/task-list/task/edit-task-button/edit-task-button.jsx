import React from 'react';
import PropTypes from 'prop-types';
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

		let taskData = {id: this.props.taskId, name: this.props.name, status: this.props.status, sortIndex: this.props.sortIndex};
		const tasks = new TaskResource(taskData);

		if (newButtonStatus === 'edit') {
			tasks.$update()
				.catch(err => console.log('error:', err));
		}

		this.setState({
			buttonStatus: newButtonStatus,
		});

		this.props.getButtonStatus(newButtonStatus);
	}

	render() {
	    return (
	    	<div className="editButton">
	    		<button type="button" disabled={this.props.status === 1 || !this.props.name} onClick={this.changeTask}>{this.state.buttonStatus}</button>
	    	</div>
	    );
	}
}

EditTaskButton.propTypes = {
	taskId: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	getButtonStatus: PropTypes.func.isRequired,
	sortIndex: PropTypes.number.isRequired,
	status: PropTypes.number.isRequired,
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(EditTaskButton);