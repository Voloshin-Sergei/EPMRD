import React from 'react';

import { StyledHeader } from './Header.styled';

export const Header: React.FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
