import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { breakpoints } from '../../styles/variables/responsive.styled';
import { fonts } from '../../styles/variables/fonts.styled';

export const StyledHeader = styled.header`
  background: linear-gradient(${colors.colorPrimaryShade}, ${colors.colorPrimaryShade}),
    url('/assets/header_bg.jpg') no-repeat center / cover;
`;

export const StyledContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 12rem 2rem 12rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
  }
`;

export const StyledTitle = styled.span`
  display: block;
  margin-bottom: 5rem;
  color: ${colors.colorSecondary};
  font-weight: ${fonts.fontWeightMedium};
  font-size: 3.6rem;
  text-transform: uppercase;

  @media screen and (max-width: ${breakpoints.mobile}) {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: ${breakpoints.mobileSm}) {
    margin-bottom: 2rem;
  }
`;
