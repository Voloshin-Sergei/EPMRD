import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe("Button component", () => {
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