import React from 'react';
import PropTypes from 'prop-types';
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

		this.props.getTaskName(value);
	}

	render() {
	    return (
	    	<div className="taskText">
	    		<input type="text" value={this.state.value} disabled={this.props.buttonStatus === 'edit'} onChange={this.changeValue} />
	    	</div>
	    );
	}
}

TaskText.propTypes = {
	taskId: PropTypes.number.isRequired,
	buttonStatus: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	getTaskName: PropTypes.func.isRequired,
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(TaskText);