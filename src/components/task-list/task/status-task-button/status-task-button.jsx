import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { baseUrl } from '../../../../../base-url.js';
import ReactResource from 'react-resource';
import './status-task-button.css';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

class StatusTaskButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	status: (this.props.status === 0) ? false : true,
	    }

	    this.changeStatus = this.changeStatus.bind(this);
	}

	changeStatus(event) {
		this.setState({
			status: event.target.checked,
		});

		let newStatus = (event.target.checked === false) ? 0 : 1;

		let taskData = {id: this.props.taskId, name: this.props.name, status: newStatus, sortIndex: this.props.sortIndex};

		const tasks = new TaskResource(taskData);

		tasks.$update()
			.catch(err => console.log('error:', err));

		this.props.getTaskStatus(newStatus);
	}

	render() {
	    return (
	    	<div className="statusButton">
	    		<input type="checkbox" disabled={this.props.buttonStatus === 'save'} checked={this.state.status} onChange={this.changeStatus} />
	    	</div>
	    );
	}
}

StatusTaskButton.propTypes = {
	taskId: PropTypes.number.isRequired,
	buttonStatus: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	getTaskStatus: PropTypes.func.isRequired,
	sortIndex: PropTypes.number.isRequired,
	status: PropTypes.number.isRequired,
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(StatusTaskButton);