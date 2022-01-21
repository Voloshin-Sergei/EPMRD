import React from 'react';
import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';
import { GlobalStyle } from '../styles/global.styled';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  );
};
