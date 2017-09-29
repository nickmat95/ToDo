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

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(TaskText);