import React from 'react';
import { render } from 'enzyme';
import { Header }  from './Header';

describe("Header component", () => {
    it('should render Header component', () => {
    const component = render(<Header/>); 
    expect(component).toMatchSnapshot();
  });
});