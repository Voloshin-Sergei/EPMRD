import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';

ReactDOM.render(
  <>
    <Header />
    <Main />
  </>,
  document.getElementById('root'),
);
