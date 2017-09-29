import React from 'react';
import { connect } from 'react-redux';
import TaskText from './task-text/task-text.jsx';
import EditTaskButton from './edit-task-button/edit-task-button.jsx';
import StatusTaskButton from './status-task-button/status-task-button.jsx';
import DeleteTaskButton from './delete-task-button/delete-task-button.jsx';
import Status from './status/status.jsx';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../../../item-types.js';
import './task.css';

const taskSource = {
	beginDrag(props) {
	    return {
	    	id: props.id,
	    	originalIndex: props.findTask(props.id).index,
	    };
	},

	endDrag(props, monitor) {
	    const { id: droppedId, originalIndex } = monitor.getItem();
	    const didDrop = monitor.didDrop();

	    if (!didDrop) {
	    	props.moveTask(droppedId, originalIndex);
	    }
	},
};

const taskTarget = {
	canDrop() {
  		return false;
	},

	hover(props, monitor) {
	    const { id: draggedId } = monitor.getItem();
	    const { id: overId } = props;

	    if (draggedId !== overId) {
	    	const { index: overIndex } = props.findTask(overId);
	    	props.moveTask(draggedId, overIndex);
	    }
	},
};

const DSource = DragSource(ItemTypes.TASK, taskSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}));

const DTarget = DropTarget(ItemTypes.TASK, taskTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

class Task extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	status: this.props.status,
	    }
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newStatus.id === this.props.id) {
			this.setState({
				status: nextProps.newStatus.status,
			});
		}
	}

	render() {
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
	    return connectDragSource(connectDropTarget(
	    	<div className="task">
	    		<TaskText
	    			name={this.props.name}
	    			taskId={this.props.id}
	    		/>
	    		<EditTaskButton 
	    			taskId={this.props.id}
	    			status={this.state.status}
	    			name={this.props.name}
	    			sortIndex={this.props.sortIndex}
	    		/>
	    		<StatusTaskButton
	    			taskId={this.props.id}
	    			status={this.state.status}
	    			name={this.props.name}
	    			sortIndex={this.props.sortIndex} 
	    		/>
	    		<DeleteTaskButton taskId={this.props.id} />
	    		<Status
	    			taskId={this.props.id}
	    			status={this.state.status} 
	    		/>
	    	</div>
	    ));
	}
}

export default connect(
	state => ({
		newStatus: state.getStatus
	}),
	dispatch => ({

	})
)(DTarget(DSource(Task)));