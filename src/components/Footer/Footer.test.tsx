import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Footer} from './Footer';
Enzyme.configure({ adapter: new Adapter() });

describe("Footer component", () => {
    it('should render Footer component', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  });
});

