import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe("Button component", () => {
    it('should render Button component with props', () => {
    const component = shallow(<Button className="test class" variant="secondary" children="test button" type="submit" />);
    expect(component).toMatchSnapshot();
  });

  it('should render Button component with out props', () => {
    const component = shallow(<Button className="test class" children="test button"/>);
    expect(component).toMatchSnapshot();
  });
});