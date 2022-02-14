import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { breakpoints } from '../../styles/variables/responsive.styled';

export const StyledTitle = styled.span`
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
