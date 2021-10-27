import React, { useCallback } from 'react';
import style from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  dataTestId?: string;
  onClick?(data?: string): void;
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
  onClick,
  activeClassName,
}) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <button
      className={` ${style.button} ${className} ${style[variant]} ${activeClassName}`}
      type={type}
      data-test-id={dataTestId}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
