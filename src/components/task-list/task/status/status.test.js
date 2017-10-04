import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Status from './status.jsx';

configure({ adapter: new Adapter() });

describe('<Status />', () => {
   it('should render status: processing/complete', () => {
      const renderedComponent = shallow(
         <Status taskId="1" status="processing" />
      );

      // Выведем отрендеренный компонент
      console.log(renderedComponent.debug());

      expect(renderedComponent.find('div').hasClass('status')).toBeDefined();
      /*expect(renderedComponent.find('h1').text()).toBe('Home');
      expect(renderedComponent.find('input').length).toBe(1);

      expect(renderedComponent.find(Wellcome).props().username).toBeDefined();
      expect(renderedComponent.contains(<Wellcome username={'Alice'} />)).toBe(true);*/
   });

  /* it('should call changeUsername on input changes', () => {
      const changeUsernameSpy = jest.fn();

      const renderedComponent = shallow(
         <Home username={'Alice'} changeUsername={changeUsernameSpy}
      );

      renderedComponent.find('input').simulate('change', { target: { value: 'Test' } });
      expect(changeUsernameSpy).toBeCalledWith('Test');
   });*/
});