import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { breakpoints } from '../../styles/variables/responsive.styled';
import { fonts } from '../../styles/variables/fonts.styled';
import bgImg from '../../assets/header_bg.jpg';

export const StyledHeader = styled.header`
  background: linear-gradient(${colors.colorPrimaryShade}, ${colors.colorPrimaryShade}),
    url(${bgImg}) no-repeat center / cover;
`;
export const StyledTitle = styled.p`
  margin: 2rem 0 8rem 5rem;
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
