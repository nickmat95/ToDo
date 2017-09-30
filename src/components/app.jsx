import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddTask from './add-task/add-task.jsx';
import TaskList from './task-list/task-list.jsx';
import { baseUrl } from '../../base-url.js';
import ReactResource from 'react-resource';
import './app.css';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});
const tasksList = new TaskResource();

class App extends React.Component {

	componentDidMount() {
		tasksList.$get()
		.then(taskList => this.props.tasksList(taskList))
		.catch(err => console.log('error:', err));
	}

	render() {
	    return (
	    	<div className="container">
	        	<AddTask />
	        	<TaskList />
	    	</div>
	    );
	}
}

App.propTypes = {
	tasksList: PropTypes.func.isRequired,
}

export default connect(
	state => ({

	}),
	dispatch => ({
		tasksList: list => dispatch({ type: 'GET_TASKS_LIST', list }),
	})
)(App);