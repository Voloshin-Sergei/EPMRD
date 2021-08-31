import React from 'react';
import { render } from 'enzyme';
import { MoviesFilter}  from './MoviesFilter';

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