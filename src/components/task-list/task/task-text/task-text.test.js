import React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../../../reducers';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskText from './task-text.jsx';

configure({ adapter: new Adapter() });

const store = createStore(reducer);

describe('<TaskText />', () => {
	it('should render field', () => {
    	const renderedComponent = shallow(
        	<TaskText
         		taskId="1"
         		name="task name"
                buttonStatus="edit"
                store={store}
         	/>
    	).dive();
		expect(renderedComponent.find('div').hasClass('taskText')).toBeDefined();

    	// checking field disabled attribute relatively component props

    	renderedComponent.setProps({ buttonStatus: 'edit' });
    	let input = renderedComponent.find({ type: 'text' });
    	expect(input.props().disabled).toBe(true);

        // checking field change

        let mock = (value) => value;

        renderedComponent.setProps({ getTaskName: mock });

        input.simulate('change', { target: { value: 'text' } });
        expect(renderedComponent.state('value')).toBe('text');
   });
});