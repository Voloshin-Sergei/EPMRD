import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Header }  from './Header';
Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
    it('should render Header component', () => {
    const component = render(<Header/>); 
    expect(component).toMatchSnapshot();
  });
});