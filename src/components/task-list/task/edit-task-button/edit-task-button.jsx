import React from 'react';
import { connect } from 'react-redux';
import './edit-task-button.css';

class EditTaskButton extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		   	buttonStatus: 'edit',
		}

		this.changeTask = this.changeTask.bind(this);
	}

	changeTask() {
		let newButtonStatus = (this.state.buttonStatus === 'edit') ? 'save' : 'edit';

		this.setState({
			buttonStatus: newButtonStatus,
		});
	}

	render() {
		let status = this.props.status;
	    return (
	    	<div className="editButton">
	    		<button type="button" disabled={status === 1} onClick={this.changeTask}>{this.state.buttonStatus}</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(EditTaskButton);