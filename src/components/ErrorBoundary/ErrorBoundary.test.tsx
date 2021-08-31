import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary }  from './ErrorBoundary';

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