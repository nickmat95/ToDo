import React from 'react';
import { connect } from 'react-redux';
import { baseUrl } from '../../../../../base-url.js';
import ReactResource from 'react-resource';
import './status-task-button.css';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

class StatusTaskButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	status: (this.props.status === 0) ? false : true
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
			.then(task => this.props.tasksList(task))
			.catch(err => console.log('error:', err));

		this.props.getStatus(newStatus, this.props.taskId);
	}

	render() {
	    return (
	    	<div className="statusButton">
	    		<input type="checkbox" onChange={this.changeStatus} checked={this.state.status} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		getStatus: (status, id) => dispatch({ type: 'GET_STATUS', status, id }),
		tasksList: modifiedTask => dispatch({ type: 'UPDATE_TASK', modifiedTask }),
	})
)(StatusTaskButton);