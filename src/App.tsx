import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';
import { GlobalStyle } from './styles/global.styled';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
