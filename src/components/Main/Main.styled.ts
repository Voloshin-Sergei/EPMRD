import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { fonts } from '../../styles/variables/fonts.styled';

export const StyledMain = styled.main`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
export const StyledError = styled.h2`
  color: ${colors.colorSecondary};
  font-weight: ${fonts.fontWeightMedium};
  font-size: 6rem;
  text-align: center;
`;

export const StyledTitle = styled.h2`
  font-weight: ${fonts.fontWeightMedium};
  font-size: 6rem;
  text-align: center;
`;
