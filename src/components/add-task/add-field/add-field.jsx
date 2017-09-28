import React from 'react';
import { connect } from 'react-redux';
import './add-field.css';

class AddField extends React.Component {

	constructor(props) {
	    super(props);

	    this.changeValue = this.changeValue.bind(this);

	    this.state = {
	    	value: '',
	    };
	}

	changeValue(event) {
		this.setState({
			value: event.target.value
		});

		this.props.getAddingTaskTitle(event.target.value);
	}

	render() {
	    return (
	    	<div className="addTaskField">
	    		<input type="text" value={this.state.value} placeholder="enter task.." onChange={this.changeValue} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		cleanedField: state.cleanField
	}),
	dispatch => ({
		getAddingTaskTitle: (title) => dispatch({ type: 'GET_ADDING_TITLE', title }),
	})
)(AddField);