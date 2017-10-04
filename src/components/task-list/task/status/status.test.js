import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Status from './status.jsx';

configure({ adapter: new Adapter() });

describe('<Status />', () => {
   it('should render status: processing/complete', () => {
      const renderedComponent = shallow(
         <Status status="processing" taskId="1" />
      );

      expect(renderedComponent.find('div').hasClass('status')).toBeDefined();
      expect(renderedComponent.find('span').text()).toBe('status: processing' && 'status: complete');
   });
});