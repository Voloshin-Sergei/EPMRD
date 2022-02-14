import styled from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';
import { breakpoints } from '../../../styles/variables/responsive.styled';

export const StyledFilter = styled.div`
  background-color: ${colors.colorPrimaryDarkLight};
`;

export const StyledContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 12rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: ${breakpoints.mobileSm}) {
    flex-direction: column;
  }
`;

export const StyledMoviesCount = styled.span`
  color: ${colors.colorPrimaryDark};
  font-size: 1.8rem;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledButtonsContainerDesc = styled.span`
  margin-right: 1rem;
  font-size: 1.8rem;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
export const StyledListItem = styled.li`
  margin-right: 1rem;
`;
