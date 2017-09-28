import React from 'react';
import { connect } from 'react-redux';
import './status-task-button.css';

class StatusTaskButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	status: (this.props.status === 0) ? false : true
	    }

	    this.changeStatus = this.changeStatus.bind(this);
	}

	changeStatus(event) {
		this.setState({
			status: event.target.checked,
		});

		let newStatus = (event.target.checked === false) ? 0 : 1;

		this.props.getStatus(newStatus, this.props.taskId);
	}

	render() {
	    return (
	    	<div className="statusButton">
	    		<input type="checkbox" onChange={this.changeStatus} checked={this.state.status} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		getStatus: (status, id) => dispatch({ type: 'GET_STATUS', status, id }),
	})
)(StatusTaskButton);