import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { breakpoints } from '../../styles/variables/responsive.styled';
import { fonts } from '../../styles/variables/fonts.styled';

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

export const StyledTagLine = styled.span`
  margin-bottom: 1rem;
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
  text-transform: uppercase;
`;

export const StyledForm = styled.form`
  padding: 1rem 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  color: ${colors.colorPrimary};
  font-size: 1.8rem;
  background-color: ${colors.colorPrimaryDarkLighten};
  border: none;

  &::placeholder {
    font-size: 1.8rem;
  
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButtonsContainerDesc = styled.span`
  margin-right: 1rem;
  color: ${colors.colorPrimary};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const StyledListItem = styled.li`
  margin-right: 1rem;
`;
