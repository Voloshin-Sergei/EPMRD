import React from 'react';

import style from './Button.module.scss';

export const Button = ({ text, className, classVariant }) => (
  <button className={`${style.button} ${className} ${style[classVariant]}`} type="button">
    {text}
  </button>
);
