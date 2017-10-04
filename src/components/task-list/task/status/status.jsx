import React from 'react';
import PropTypes from 'prop-types';
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

Status.propTypes = {
	taskId: PropTypes.number.isRequired,
	status: PropTypes.number.isRequired,
}

export default Status;