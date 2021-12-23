import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';

import './style.scss';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </ErrorBoundary>
  );
};
