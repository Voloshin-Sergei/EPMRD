import React from 'react';

import style from './Button.module.scss';

export const Button = ({ className, variant, text, type }) => (
  <button className={`${style.button} ${className} ${style[variant]}`} type={type}>
    {text}
  </button>
);
