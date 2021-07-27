import React from 'react';

import style from './Button.module.scss';

export const Button = ({ text, className, filled }) => (
  <button className={`${style.button} ${className} ${filled ? style.filled : ''}`} type="button">
    {text}
  </button>
);
