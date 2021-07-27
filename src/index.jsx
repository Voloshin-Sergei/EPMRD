import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

import './style.scss';

ReactDOM.render(
  <>
    <ErrorBoundary>
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  </>,
  document.getElementById('root'),
);
