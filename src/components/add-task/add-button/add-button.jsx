import React from 'react';
import { connect } from 'react-redux';
import './add-button.css';
import { baseUrl } from '../../../../base-url.js';
import ReactResource from 'react-resource';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

class AddButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.addTask = this.addTask.bind(this);
	}

	addTask() {
		let taskData = {title: this.props.addingTaskTitle};
		const newTask = new TaskResource(taskData);

		newTask.$create()
			.then((task) => {
				this.props.tasksList(task);
			})
			.catch((err) => {  
			    console.log('error:', err);  
			});
	}

	render() {
	    return (
	    	<div className="addTaskButton">
	    		<button type="button" disabled={!this.props.addingTaskTitle} onClick={this.addTask}>Add task</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		addingTaskTitle: state.getAddingTaskTitle
	}),
	dispatch => ({
		tasksList: (task) => dispatch({ type: 'ADD_TASK', task }),
	})
)(AddButton);