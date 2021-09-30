import React from 'react';
import style from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  dataTestId?: string;
  callback?: any;
  typeCategory?: string;
  activeCategory?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  children,
  type = 'button',
  dataTestId,
  callback,
  typeCategory,
  activeCategory,
}) => {
  return (
    <button
      className={`${activeCategory === typeCategory ? style.active : ''} ${
        style.button
      } ${className} ${style[variant]} `}
      type={type}
      data-test-id={dataTestId}
      onClick={() => callback(typeCategory)}
    >
      {children}
    </button>
  );
};
