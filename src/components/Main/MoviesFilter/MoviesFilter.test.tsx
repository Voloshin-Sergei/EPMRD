import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MoviesFilter}  from './MoviesFilter';
Enzyme.configure({ adapter: new Adapter() });

const component = render(<MoviesFilter/>);

describe("MoviesFilter component", () => {
    it('should render MoviesFilter component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render 3 buttons', () => {
    const buttons = component.find("button")
    expect(buttons).toHaveLength(3);
  });
});