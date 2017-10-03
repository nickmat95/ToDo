import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddTask from './add-task/add-task.jsx';
import TaskList from './task-list/task-list.jsx';
import { TaskResource } from '../../constants.js';
import './app.css';

const tasksList = new TaskResource();

class App extends React.Component {

	componentDidMount() {
		tasksList.$get()
		.then(taskList => this.props.getTasksList(taskList.sort((a, b) => a.sort_index - b.sort_index)))
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
	getTasksList: PropTypes.func.isRequired,
}

export default connect(
	state => ({

	}),
	dispatch => ({
		getTasksList: list => dispatch({ type: 'GET_TASKS_LIST', list }),
	})
)(App);