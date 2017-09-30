import React from 'react';
import PropTypes from 'prop-types';
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
	    	buttonStatus: 'edit',
	    	name: this.props.name,
	    }

	    this.getButtonStatus = this.getButtonStatus.bind(this);
	    this.getTaskName = this.getTaskName.bind(this);
	    this.getTaskStatus = this.getTaskStatus.bind(this);
	}

	getButtonStatus(buttonStatus) {
		this.setState({
			buttonStatus: buttonStatus,
		});
	}

	getTaskName(name) {
		this.setState({
			name: name,
		});
	}

	getTaskStatus(status) {
		this.setState({
			status: status,
		});
	}

	render() {
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
	    return connectDragSource(connectDropTarget(
	    	<div className="task">
	    		<TaskText
	    			name={this.state.name}
	    			taskId={this.props.id}
	    			buttonStatus={this.state.buttonStatus}
	    			getTaskName={this.getTaskName}
	    		/>
	    		<EditTaskButton 
	    			taskId={this.props.id}
	    			status={this.state.status}
	    			name={this.state.name}
	    			sortIndex={this.props.sortIndex}
	    			getButtonStatus={this.getButtonStatus}
	    		/>
	    		<StatusTaskButton
	    			taskId={this.props.id}
	    			status={this.state.status}
	    			name={this.state.name}
	    			sortIndex={this.props.sortIndex} 
	    			getTaskStatus={this.getTaskStatus}
	    			buttonStatus={this.state.buttonStatus}
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

Task.propTypes = {
	findTask: PropTypes.func.isRequired,
	moveTask: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	isDragging: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	sortIndex: PropTypes.number.isRequired,
	status: PropTypes.number.isRequired,
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DTarget(DSource(Task)));