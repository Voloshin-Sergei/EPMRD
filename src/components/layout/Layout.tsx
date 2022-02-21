import React, { ReactNode } from 'react';
import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';
import { StyledPage } from './Layout.styled';

export const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <ErrorBoundary>
        <StyledPage>
          <Header>{children}</Header>
          <Main />
          <Footer />
        </StyledPage>
      </ErrorBoundary>
    </>
  );
};
