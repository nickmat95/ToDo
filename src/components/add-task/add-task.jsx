import React from 'react';
import { connect } from 'react-redux';
import AddField from './add-field/add-field.jsx';
import AddButton from './add-button/add-button.jsx'
import './add-task.css';

class AddTask extends React.Component {
	render() {
	    return (
	    	<div>
	    		<AddField />
	    		<AddButton />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(AddTask);