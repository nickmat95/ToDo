import React from 'react';
import { connect } from 'react-redux';
import AddTask from './add-task/add-task.jsx';
import TaskList from './task-list/task-list.jsx';
import './app.css';

class App extends React.Component {
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

	})
)(App);