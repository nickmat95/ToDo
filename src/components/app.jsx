import React from 'react';
import { connect } from 'react-redux';
import AddTask from './add-task/add-task.jsx';
import TaskList from './task-list/task-list.jsx';
import { baseUrl } from '../../base-url.js';
import ReactResource from 'react-resource';
import './app.css';

const Tasks = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});
const tasksList = new Tasks();

class App extends React.Component {

	componentDidMount() {
		tasksList.$get()
		.then((response) => this.props.tasksList(response))
		.catch((err) => console.log('error:', err));
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

export default connect(
	state => ({

	}),
	dispatch => ({
		tasksList: (list) => dispatch({ type: 'GET_TASKS_LIST', list }),
	})
)(App);