import React from 'react';
import { connect } from 'react-redux';
import Task from './task/task.jsx';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from '../../item-types.js';
import './task-list.css';

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
				tasks: nextProps.taskList
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
    	
	    return connectDropTarget(
	    	<div className="taskList">
	    	{tasks.map(task => (
	    		<Task
	    			key={task.id}
		            id={task.id}
		            name={task.name}
		            status={task.status}
		            moveTask={this.moveTask}
		            findTask={this.findTask}
	    		/>
	    	))}
	    	</div>
	    );
	}
}


export default connect(
	state => ({
		taskList: state.getTasksList
	}),
	dispatch => ({

	})
)(DDropContext(DTarget(TaskList)));