import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { breakpoints } from '../../styles/variables/responsive.styled';

export const Title = styled.p`
  margin-bottom: 1rem;
  margin-left: 5rem;
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
  text-transform: uppercase;
`;

export const Form = styled.form`
  padding: 1rem 5rem;

  @media screen and (max-width: ${breakpoints.mobileSm}) {
    padding: 1rem 2rem;
  }
`;

export const Input = styled.input`
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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonsContainerDesc = styled.span`
  margin-right: 1rem;
  color: ${colors.colorPrimary};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 1rem;
`;
