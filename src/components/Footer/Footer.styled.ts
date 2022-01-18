import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { fonts } from '../../styles/variables/fonts.styled';

export const StyledFooter = styled.footer`
  height: 100%;
  background-color: ${colors.colorPrimaryDarkLighten};
`;

export const StyledTitle = styled.div`
  padding: 3rem;
  color: ${colors.colorSecondary};
  font-weight: ${fonts.fontWeightMedium};
  font-size: 2.4rem;
  text-transform: uppercase;
`;
