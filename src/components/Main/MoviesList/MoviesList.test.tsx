import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MoviesList}  from './MoviesList';
Enzyme.configure({ adapter: new Adapter() });

describe("MoviesList component", () => {
    it('should render MoviesList component', () => {
    const component = render(<MoviesList/>);
    expect(component).toMatchSnapshot();
  });
});