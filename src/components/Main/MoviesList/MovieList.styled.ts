import styled from 'styled-components';
import { breakpoints } from '../../../styles/variables/responsive.styled';

// sizes
const primarySize = '320px';
const primarySizeMd = '300px';
const primarySizeSm = '280px';
const primarySizeXs = '210px';

export const StyledMovies = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, ${primarySize});
  align-content: flex-start;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, ${primarySizeMd});
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, ${primarySizeSm});
  }

  @media screen and (max-width: ${breakpoints.mobileSm}) {
    grid-template-columns: repeat(auto-fit, ${primarySizeXs});
  }
`;
