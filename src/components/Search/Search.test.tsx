import React from 'react';
import { render } from 'enzyme';
import { Search }  from './Search';

const component = render(<Search/>);

describe("Search component", () => {
    it('should render Search component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render 3 buttons', () => {
    const buttons = component.find("button")
    expect(buttons).toHaveLength(3);
  });
});