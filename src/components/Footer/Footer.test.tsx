import React from 'react';
import { shallow } from 'enzyme';
import {Footer} from './Footer';

describe("Footer component", () => {
    it('should render Footer component', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  });
});

