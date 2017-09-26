import React from 'react';
import { connect } from 'react-redux';
import './status.css';

class Status extends React.Component {
	render() {
	    return (
	    	<div className="status">
	    		<span>status: processing</span>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Status);