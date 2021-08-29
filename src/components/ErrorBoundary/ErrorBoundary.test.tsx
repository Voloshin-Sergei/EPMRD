import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ErrorBoundary }  from './ErrorBoundary';
Enzyme.configure({ adapter: new Adapter() });

const Something = () => null;

describe("ErrorBoundary component", () => {
    it('should render ErrorBoundary component', () => {
      const wrapper = shallow(
        <ErrorBoundary>
          <Something />
        </ErrorBoundary>
      );
      const error = new Error('test');
      wrapper.find(Something).simulateError(error);
      expect(wrapper).toMatchSnapshot();
  });
});