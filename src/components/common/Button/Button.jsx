import React from 'react';
import propTypes from 'prop-types';
import style from './Button.module.scss';

const Button = (
  {
    className, variant, text, type = 'button',
  },
) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${style.button} ${className} ${style[variant]}`} type={type}>
    {text}
  </button>
);

Button.propTypes = {
  className: propTypes.string.isRequired,
  variant: propTypes.oneOf(['primary', 'secondary']),
  text: propTypes.string.isRequired,
  type: propTypes.oneOf(['button', 'submit']).isRequired,
};

Button.defaultProps = {
  variant: '',
};

export default Button;
