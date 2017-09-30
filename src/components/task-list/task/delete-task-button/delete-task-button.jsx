import React from 'react';
import PropTypes from 'prop-types';
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

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			for (let i = 0; i < nextProps.tasksList.length; i++) {
				if (i !== nextProps.tasksList[i].sort_index) {
					let task = nextProps.tasksList[i];
					let sortIndex = i;
					let taskData = {id: task.id, name: task.name, status: task.status, sortIndex: sortIndex};

					const tasks = new TaskResource(taskData);

					tasks.$update()
						.catch(err => console.log('error:', err));
				}
			}
		}
	}

	deleteComment() {
		let taskData = {id: this.props.taskId}
		const tasks = new TaskResource(taskData);

		tasks.$delete()
			.then(taskId => this.props.getTasksList(taskId.id))
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

DeleteTaskButton.propTypes = {
	taskId: PropTypes.number.isRequired,
	getTasksList: PropTypes.func.isRequired,
}

export default connect(
	state => ({
		tasksList: state.getTasksList,
	}),
	dispatch => ({
		getTasksList: id => dispatch({ type: 'DELETE_TASK', id }),
	})
)(DeleteTaskButton);