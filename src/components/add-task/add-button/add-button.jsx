import React from 'react';
import { connect } from 'react-redux';
import './add-button.css';
import { baseUrl } from '../../../../base-url.js';
import ReactResource from 'react-resource';

const Tasks = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

class AddButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.addTask = this.addTask.bind(this);
	}

	addTask() {
		const newTask = new Tasks({first_name: 'Johnny', last_name: 'Bravo'});

		newTask.$create();
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

	})
)(AddButton);