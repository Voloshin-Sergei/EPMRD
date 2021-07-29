import React from 'react';

import style from './Button.module.scss';

export const Button = ({ text, className, primary }) => (
  <button className={`${style.button} ${className} ${primary ? style.primary : ''}`} type="button">
    {text}
  </button>
);
