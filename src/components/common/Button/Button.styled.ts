import styled, { css } from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';

interface ButtonStyledProps {
  variant: 'primary' | 'secondary';
  typeBtn: 'searchBtn' | 'searchTagBtn' | undefined;
  active: boolean | undefined;
}

const primaryStyle = css`
  padding: 0.5rem 1rem;
  color: ${colors.colorPrimary};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const searchTagBtn = css`
  background-color: ${colors.colorPrimaryDarkLighten};

  &:hover {
    background-color: ${colors.colorPrimaryDarken};
  }
`;

const searchTagBtnActive = css`
  background-color: ${colors.colorSecondary};
`;

const searchBtn = css`
  margin-left: auto;
  font-size: 1.8rem;
  background-color: ${colors.colorSecondary};

  &:hover {
    background-color: ${colors.colorSecondaryLighten};
  }

  &:active {
    transform: scale(0.9);
  }
`;

const secondaryStyle = css`
  background-color: transparent;
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  cursor: pointer;

  ${(props) => (props.variant === 'primary' ? primaryStyle : secondaryStyle)};
  ${(props) => (props.typeBtn === 'searchBtn' ? searchBtn : '')};
  ${(props) => (props.typeBtn === 'searchTagBtn' ? searchTagBtn : '')};
  ${(props) => (props.typeBtn === 'searchTagBtn' && props.active ? searchTagBtnActive : '')};
`;
