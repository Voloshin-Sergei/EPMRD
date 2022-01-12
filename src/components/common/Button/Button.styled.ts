import styled, { css } from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';

interface ButtonStyledProps {
  variant: 'primary' | 'secondary';
  activeClassName: string | undefined;
}

const primaryStyle = css`
  padding: 0.5rem 1rem;
  color: ${colors.colorPrimary};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const secondaryStyle = css`
  background-color: transparent;
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  cursor: pointer;

  ${(props) => (props.variant === 'primary' ? primaryStyle : secondaryStyle)};
`;
