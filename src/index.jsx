import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';

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
