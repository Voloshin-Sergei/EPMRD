import React from 'react';
import propTypes from 'prop-types';
import style from './Button.module.scss';

export const Button = ({
  className, variant = 'primary', text, type = 'button',
}) => (
  <button className={`${style.button} ${className} ${style[variant]}`} type={type}>
    {text}
  </button>
);

Button.propTypes = {
  className: propTypes.string.isRequired,
  variant: propTypes.oneOf(['primary', 'secondary']).isRequired,
  text: propTypes.string.isRequired,
  type: propTypes.oneOf(['button', 'submit']).isRequired,
};
