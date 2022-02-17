import React, { ReactNode } from 'react';
import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';
import { PageStyled } from './Layout.staled';

export const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <ErrorBoundary>
        <PageStyled>
          <Header>{children}</Header>
          <Main />
          <Footer />
        </PageStyled>
      </ErrorBoundary>
    </>
  );
};
