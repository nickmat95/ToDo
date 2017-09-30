import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './task/task.jsx';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from '../../item-types.js';
import { baseUrl } from '../../../base-url.js';
import ReactResource from 'react-resource';
import './task-list.css';

const TaskResource = new ReactResource(`${baseUrl}/api/tasks/{:task}`, {task: ':task'});

const taskTarget = {
	drop() {
	},
};

const DTarget = DropTarget(ItemTypes.TASK, taskTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

const DDropContext = DragDropContext(HTML5Backend);

class TaskList extends React.Component {

	constructor(props) {
	    super(props);

	    this.moveTask = this.moveTask.bind(this);
	    this.findTask = this.findTask.bind(this);

	    this.state = {
	    	tasks: this.props.taskList,
	    };
	}

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			this.setState({
				tasks: nextProps.taskList,
			});
		}
	}

	moveTask(id, atIndex) {
		const { task, index } = this.findTask(id);
	    this.setState(update(this.state, {
	    	tasks: {
		        $splice: [
		        	[index, 1],
		        	[atIndex, 0, task],
		        ],
	    	},
		}));

		for(let i=0; i<this.state.tasks.length; i++) {
			if(i !== this.state.tasks[i].sort_index) {
				let sortIndex = i;
				let task = this.state.tasks[i];
				let taskData = {id: task.id, name: task.name, status: task.status, sortIndex: sortIndex};

				const tasks = new TaskResource(taskData);

				tasks.$update()
					.catch(err => console.log('error:', err));

			}
		}

	}

	findTask(id) {
	    const { tasks } = this.state;
	    const task = tasks.filter(c => c.id === id)[0];

	    return {
	    	task,
	    	index: tasks.indexOf(task),
	    };
	}

	render() {

		const { connectDropTarget } = this.props;
    	const { tasks } = this.state;

    	let tasksClone = Object.assign([], tasks);
    	
	    return connectDropTarget(
	    	<div className="taskList">
	    	{tasksClone.reverse().map(task => (
	    		<Task
	    			key={task.id}
		            id={task.id}
		            name={task.name}
		            status={task.status}
		            sortIndex={task.sort_index}
		            moveTask={this.moveTask}
		            findTask={this.findTask}
	    		/>
	    	))}
	    	</div>
	    );
	}
}

TaskList.propTypes = {
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
		taskList: state.getTasksList,
	}),
	dispatch => ({

	})
)(DDropContext(DTarget(TaskList)));