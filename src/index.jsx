import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'Components/Header';
import Main from 'Components/Main';
import Footer from 'Components/Footer';
import ErrorBoundary from 'Components/ErrorBoundary';

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
