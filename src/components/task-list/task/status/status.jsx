import React from 'react';
import { connect } from 'react-redux';
import './status.css';

class Status extends React.Component {
	render() {
		let text = (this.props.status === 0) ? 'processing' : 'complete';
	    return (
	    	<div className="status">
	    		<span>status: {text}</span>
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