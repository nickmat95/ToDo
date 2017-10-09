import React from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../../../reducers';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Status from './status.jsx';

configure({ adapter: new Adapter() });

const store = createStore(reducer);

describe('<Status />', () => {
   it('should render status: processing/complete', () => {
      const renderedComponent = shallow(
         <Status
            taskId="1"
            status="processing"
            store={store}
         />
      ).dive();

      expect(renderedComponent.find('div').hasClass('status')).toBeDefined();
      expect(renderedComponent.find('span').text()).toBe('status: processing' && 'status: complete');
   });
});