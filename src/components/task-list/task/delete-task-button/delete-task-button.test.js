import React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../../../reducers';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeleteTaskButton from './delete-task-button.jsx';

configure({ adapter: new Adapter() });

const store = createStore(reducer);

describe('<DeleteTaskButton />', () => {
	it('should render button which delete task', () => {
    	const renderedComponent = shallow(
        	<DeleteTaskButton
         		taskId="1"
         		store={store}
         	/>
    	).dive();

		expect(renderedComponent.find('div.deleteButton').hasClass('deleteButton')).toBeDefined();
   });
});