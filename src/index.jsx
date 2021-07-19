import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

ReactDOM.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>,
  document.getElementById('root'),
);
