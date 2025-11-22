import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './styles.module.scss';

const TRIANGLE_PATH =
  'M63.1526 45.3495C65.8193 46.8891 65.8193 50.7381 63.1526 52.2777L43.4238 63.6681C40.7571 65.2077 37.4238 63.2832 37.4238 60.204L37.4238 37.4231C37.4238 34.3439 40.7571 32.4194 43.4238 33.959L63.1526 45.3495Z';

export interface PlayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  srLabel?: string;
}

export const PlayButton = forwardRef<HTMLButtonElement, PlayButtonProps>(
  ({ className, srLabel = '재생', type = 'button', ...props }, ref) => (
    <button ref={ref} type={type} className={clsx(styles.button, className)} {...props}>
      <svg
        className={styles.icon}
        viewBox='0 0 96 96'
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
