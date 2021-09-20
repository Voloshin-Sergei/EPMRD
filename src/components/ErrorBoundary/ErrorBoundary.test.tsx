import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from './ErrorBoundary';

const TestComponent = () => null;

describe('ErrorBoundary component', () => {
  it('should render ErrorBoundary component', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>,
    );
    const error = new Error('test');
    wrapper.find(TestComponent).simulateError(error);
    expect(wrapper).toMatchSnapshot();
  });
});
