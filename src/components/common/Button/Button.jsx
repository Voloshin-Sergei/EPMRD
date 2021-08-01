import React from 'react';
import propTypes from 'prop-types';
import style from './Button.module.scss';

export const Button = (
  {
    className, variant, text, type,
  },
) => (
  <button className={`${style.button} ${className} ${style[variant]}`} type={type ? 'button' : 'submit'}>
    {text}
  </button>
);

Button.propTypes = {
  className: propTypes.string.isRequired,
  variant: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};
