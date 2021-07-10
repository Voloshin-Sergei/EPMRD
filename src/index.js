import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const img = require('./assets/test.jpg');

ReactDOM.render(
  <div>
    <h1>Hello World!!!</h1>

    <img src={img} width={200} height={200} alt="" />
  </div>,
  document.getElementById('root'),
);
console.log('test');
// const test = 'test';
