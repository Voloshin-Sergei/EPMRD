import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button component render', () => {
  it('should render Button component', () => {
    const component = shallow(<Button>{'test button'}</Button>);
    expect(component).toMatchSnapshot();
  });

  it('should render Button component with className props', () => {
    const component = shallow(<Button className="test_class">{'test button'}</Button>);
    expect(component).toMatchSnapshot();
  });

  it('should render Button component with variant props', () => {
    const component = shallow(<Button variant="secondary">{'test button'}</Button>);
    expect(component).toMatchSnapshot();
  });

  it('should render Button component with type props', () => {
    const component = shallow(<Button type="submit">{'test button'}</Button>);
    expect(component).toMatchSnapshot();
  });
});

describe('Button component method', () => {
  it('should call onClick method', () => {
    const callBack = jest.fn();
    const component = shallow(
      <Button onClick={callBack} dataTestId="test">
        {'test button'}
      </Button>,
    );
    component.find('[data-test-id="test"]').simulate('click');
    expect(callBack.mock.calls.length).toBe(1);
  });
});
