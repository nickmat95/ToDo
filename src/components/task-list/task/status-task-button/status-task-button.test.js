import React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../../../reducers';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StatusTaskButton from './status-task-button.jsx';

configure({ adapter: new Adapter() });

const store = createStore(reducer);

describe('<StatusTaskButton />', () => {
	it('should render checkbox which change task status', () => {
    	const renderedComponent = shallow(
        	<StatusTaskButton
         		taskId="1"
         		buttonStatus="save"
         		name="task name"
         		sortIndex="1"
         		status="0"
                store={store}
         	/>
    	).dive();
		expect(renderedComponent.find('div').hasClass('statusButton')).toBeDefined();

		// checking checkbox state relatively component state

		renderedComponent.setState({ status: false });
		let checkbox = renderedComponent.find({ type: 'checkbox' });
    	expect(checkbox.props().checked).toBe(false);

    	renderedComponent.setState({ status: true });
		checkbox = renderedComponent.find({ type: 'checkbox' });
    	expect(checkbox.props().checked).toBe(true);

    	// checking checkbox disabled attribute relatively 'buttonStatus' prop

    	renderedComponent.setProps({ buttonStatus: 'save' });
    	checkbox = renderedComponent.find({ type: 'checkbox' });
    	expect(checkbox.props().disabled).toBe(true);

    	renderedComponent.setProps({ buttonStatus: 'edit' });
    	checkbox = renderedComponent.find({ type: 'checkbox' });
    	expect(checkbox.props().disabled).toBe(false);
   });
});