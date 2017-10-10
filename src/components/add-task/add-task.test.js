import React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../reducers';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTask from './add-task.jsx';

configure({ adapter: new Adapter() });

const store = createStore(reducer);

describe('<AddTask />', () => {
	it('should render button which change task text', () => {
    	const renderedComponent = shallow(
        	<AddTask store={store} />
    	).dive();
		expect(renderedComponent.find('input').hasClass('addTaskField')).toBeDefined();
		expect(renderedComponent.find('button').hasClass('addTaskButton')).toBeDefined();

		// checking button disabled attribute relatively component state

    	renderedComponent.setState({ taskName: '' });
    	let button = renderedComponent.find({ type: 'button' });
    	expect(button.props().disabled).toBe(true);

    	// checking input field change

    	let input = renderedComponent.find({ type: 'text' });
    	input.simulate('change', { target: { value: 'text' } });
        expect(renderedComponent.state('taskName')).toBe('text');
   });
});