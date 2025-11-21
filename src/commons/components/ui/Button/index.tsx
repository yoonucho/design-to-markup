import styles from '@/commons/components/ui/Button/styles.module.scss';
import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'medium',
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const variantClass = styles[`variant-${variant}`] ?? styles['variant-primary'];
    const sizeClass = styles[`size-${size}`] ?? styles['size-medium'];

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(styles.button, variantClass, sizeClass, className)}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
