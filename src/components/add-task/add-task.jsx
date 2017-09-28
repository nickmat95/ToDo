import React from 'react';
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

	    this.state = {
	    	taskName: '',
	    };
	}

	addTask() {
		let taskData = {title: this.state.taskName};
		const tasks = new TaskResource(taskData);

		tasks.$create()
			.then(task => this.props.tasksList(task))
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

export default connect(
	state => ({

	}),
	dispatch => ({
		tasksList: task => dispatch({ type: 'ADD_TASK', task }),
	})
)(AddTask);