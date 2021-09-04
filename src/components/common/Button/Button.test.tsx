import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe("Button component", () => {
  it('should render Button component', () => {
    const component = shallow(<Button className="test_class" >{'test button'}</Button>);
    expect(component).toMatchSnapshot();
  });
});