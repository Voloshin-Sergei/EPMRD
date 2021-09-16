import React from 'react';
import style from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  dataTestId: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  children,
  type = 'button',
  dataTestId,
}) => (
  <button
    className={`${style.button} ${className} ${style[variant]}`}
    type={type}
    data-test-id={dataTestId}
  >
    {children}
  </button>
);
