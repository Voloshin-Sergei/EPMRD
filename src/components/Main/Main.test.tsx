import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Main }  from './Main';
Enzyme.configure({ adapter: new Adapter() });

describe("Main component", () => {
    it('should render Main component', () => {
    const component = render(<Main/>);  
    expect(component).toMatchSnapshot();
  });
});