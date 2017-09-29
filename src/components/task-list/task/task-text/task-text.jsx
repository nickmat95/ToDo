import React from 'react';
import { connect } from 'react-redux';
import './task-text.css';

class TaskText extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		   	value: this.props.name,
		}

		this.changeValue = this.changeValue.bind(this);
	}

	changeValue(event) {
		let value = event.target.value;

		this.setState({
			value: value,
		});

		this.props.getTaskText(value, this.props.taskId);
	}

	render() {
		let editButtonStatus = (this.props.taskId !== this.props.editButtonStatus.id) ? 'edit' : this.props.editButtonStatus.status;

	    return (
	    	<div className="taskText">
	    		<input type="text" value={this.state.value} disabled={editButtonStatus === 'edit'} onChange={this.changeValue} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		editButtonStatus: state.getEditButtonStatus
	}),
	dispatch => ({
		getTaskText: (text, id) => dispatch({ type: 'GET_TASK_TEXT', text, id })
	})
)(TaskText);