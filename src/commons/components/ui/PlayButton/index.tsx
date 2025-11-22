import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './styles.module.scss';

const TRIANGLE_PATH =
  'M25.7288 11.9323C28.3955 13.4719 28.3955 17.3209 25.7288 18.8605L6 30.251C3.33333 31.7906 0 29.8661 0 26.7869L0 4.006C0 0.926794 3.33334 -0.997701 6.00001 0.541899L25.7288 11.9323Z';

type PlayButtonSize = 'small' | 'medium' | 'large';

export interface PlayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  srLabel?: string;
  size?: PlayButtonSize;
  showCircle?: boolean;
}

export const PlayButton = forwardRef<HTMLButtonElement, PlayButtonProps>(
  (
    { className, srLabel = '재생', type = 'button', size = 'small', showCircle = false, ...props },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        styles.button,
        showCircle ? styles.withCircle : styles[`size-${size}`],
        className,
      )}
      {...props}
    >
      {showCircle ? <span className={styles.circle} aria-hidden='true' /> : null}
      <svg
        className={clsx(styles.icon, showCircle ? styles.iconWithCircle : undefined)}
        viewBox='0 0 28 31'
        role='img'
        aria-hidden='true'
        focusable='false'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d={TRIANGLE_PATH} fill='currentColor' />
      </svg>
      <span className='sr-only'>{srLabel}</span>
    </button>
  ),
);

PlayButton.displayName = 'PlayButton';
