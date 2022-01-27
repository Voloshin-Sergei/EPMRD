import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { fonts } from '../../styles/variables/fonts.styled';

export const StyledContainer = styled.div`
  padding: 5rem;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  color: ${colors.colorSecondary};
  font-weight: ${fonts.fontWeightMedium};
  font-size: 10rem;
`;
export const StyledError = styled.span`
  color: ${colors.colorPrimaryDark};
  font-size: 5rem;
  text-transform: uppercase;
`;

export const StyledDescribe = styled.p`
  margin-bottom: 2rem;
  color: ${colors.colorPrimaryDark};
  font-size: 3rem;
`;

export const StyledLink = styled.a`
  display: inline-block;
  padding: 1.2rem;
  color: ${colors.colorSecondary};
  font-size: 2rem;
  background-color: ${colors.colorPrimaryDarken};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${colors.colorPrimaryDarkLight};
  }
`;
