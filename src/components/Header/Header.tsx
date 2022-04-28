import React, { ReactNode } from 'react';

import { StyledHeader } from './Header.styled';

export const Header: React.FC<ReactNode> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
