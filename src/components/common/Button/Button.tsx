import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  className: string,
  variant: 'primary' | 'secondary',
  text: string,
  type: 'button' | 'submit'
}

export const Button: React.FC<ButtonProps> = ({
  className, variant = 'primary', text, type = 'button',
}) => (
  <button className={`${style.button} ${className} ${style[variant]}`} type={type}>
    {text}
  </button>
);
