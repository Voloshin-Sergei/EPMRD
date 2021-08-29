import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Search }  from './Search';
Enzyme.configure({ adapter: new Adapter() });

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