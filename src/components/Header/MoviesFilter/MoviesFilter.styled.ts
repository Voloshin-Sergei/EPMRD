import styled from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';
import { breakpoints } from '../../../styles/variables/responsive.styled';

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  background-color: ${colors.colorPrimaryDarkLight};

  @media screen and (max-width: ${breakpoints.mobileSm}) {
    flex-direction: column;
  }
`;

export const Result = styled.p`
  color: ${colors.colorPrimaryDark};
  font-size: 1.8rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonsContainerDesc = styled.p`
  margin-right: 1rem;
  font-size: 1.8rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
export const ListItem = styled.li`
  margin-right: 1rem;
`;
