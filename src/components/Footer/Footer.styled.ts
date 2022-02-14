import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { fonts } from '../../styles/variables/fonts.styled';
import { breakpoints } from '../../styles/variables/responsive.styled';

export const StyledFooter = styled.footer`
  margin-top: auto;
  background-color: ${colors.colorPrimaryDarkLighten};
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
  color: ${colors.colorSecondary};
  font-weight: ${fonts.fontWeightMedium};
  font-size: 2.4rem;
  text-transform: uppercase;
`;
