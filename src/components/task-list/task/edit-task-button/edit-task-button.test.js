import React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../../../reducers';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditTaskButton from './edit-task-button.jsx';

configure({ adapter: new Adapter() });

const store = createStore(reducer);

describe('<StatusTaskButton />', () => {
	it('should render button which change task text', () => {
    	const renderedComponent = shallow(
        	<EditTaskButton
         		taskId="1"
         		name="task name"
         		sortIndex="1"
         		status="0"
                store={store}
         	/>
    	).dive();
		expect(renderedComponent.find('div').hasClass('editButton')).toBeDefined();

		// checking button text relatively component state

		renderedComponent.setState({ buttonStatus: 'edit' });
		let button = renderedComponent.find({ type: 'button' });
    	expect(button.text()).toBe('edit');

    	renderedComponent.setState({ buttonStatus: 'save' });
		button = renderedComponent.find({ type: 'button' });
    	expect(button.text()).toBe('save');

        // checking button click

        let mock = (value) => value;

        renderedComponent.setProps({ getButtonStatus: mock });
        button = renderedComponent.find({ type: 'button' });
        button.simulate('click');
        expect(renderedComponent.state('buttonStatus')).toBe('edit');

    	// checking button disabled attribute relatively component props

    	renderedComponent.setProps({ name: '' });
    	button = renderedComponent.find({ type: 'button' });
    	expect(button.props().disabled).toBe(true);
   });
});