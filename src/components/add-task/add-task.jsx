import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { baseUrl } from '../../../base-url.js';
import ReactResource from 'react-resource';
import './add-task.css';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

class AddTask extends React.Component {
	constructor(props) {
	    super(props);

	    this.addTask = this.addTask.bind(this);
	    this.changeValue = this.changeValue.bind(this);
	    this.getNewSortIndex = this.getNewSortIndex.bind(this);

	    this.state = {
	    	taskName: '',
	    };
	}

	getNewSortIndex() {
		if (this.props.tasksList[0]) {
			let sortedTasksList = Object.assign([], this.props.tasksList);

			let compare = (a, b) => b.sort_index - a.sort_index;

			sortedTasksList.sort(compare);

			return sortedTasksList[0].sort_index + 1;
		}

		return 0;
	}

	addTask() {

		let sortIndex = this.getNewSortIndex();

		let taskData = {title: this.state.taskName, sortIndex: sortIndex};
		const tasks = new TaskResource(taskData);

		tasks.$create()
			.then(task => this.props.getTasksList(task))
			.catch(err => console.log('error:', err));

		this.setState({
			taskName: '',
		});
	}

	changeValue(event) {
		this.setState({
			taskName: event.target.value,
		});
	}

	render() {
	    return (
	    	<div>
		    	<input className="addTaskField" type="text" value={this.state.taskName} placeholder="enter task.." onChange={this.changeValue} />
	    		<button className="addTaskButton" type="button" disabled={!this.state.taskName} onClick={this.addTask}>Add task</button>
	    	</div>
	    );
	}
}

AddTask.propTypes = {
	getTasksList: PropTypes.func.isRequired,
	taskList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			status: PropTypes.number.isRequired,
			sort_index: PropTypes.number.isRequired,
		}),
	),
}

export default connect(
	state => ({
		tasksList: state.getTasksList,
	}),
	dispatch => ({
		getTasksList: task => dispatch({ type: 'ADD_TASK', task }),
	})
)(AddTask);