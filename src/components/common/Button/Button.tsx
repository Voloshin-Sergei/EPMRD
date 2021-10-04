import React from 'react';
import style from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  dataTestId?: string;
  callback?: any; // TODO i don't understand how to fix it
  typeCategory?: string;
  activeCategory?: string;
  activeClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  children,
  type = 'button',
  dataTestId,
  callback,
  typeCategory,
  activeClassName,
}) => {
  return (
    <button
      className={` ${style.button} ${className} ${style[variant]} ${activeClassName}`}
      type={type}
      data-test-id={dataTestId}
      onClick={() => callback(typeCategory)}
    >
      {children}
    </button>
  );
};
