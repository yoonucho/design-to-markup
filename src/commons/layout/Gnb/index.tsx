import { Button } from '@/commons/components/ui/Button';
import { Select } from '@/commons/components/ui/Select';
import styles from '@/commons/layout/Gnb/styles.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const LOGO_IMAGE_SRC = '/images/logo.svg';
const LANGUAGE_ICON_SRC = '/icons/language-icon.svg';

const LANGUAGE_OPTIONS = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
] as const;

const NAV_ITEMS = [
  { id: 'hero', label: 'Hero section' },
  { id: 'video', label: 'Video section' },
  { id: 'image-tab', label: 'Image tab section' },
  { id: 'image-slider', label: 'Image slider section' },
] as const;

export default function Gnb() {
  const [statusMessage, setStatusMessage] = useState('');

  const handleLoginClick = () => {
    setStatusMessage('');
    setTimeout(() => {
      setStatusMessage('로그인 기능은 현재 준비 중입니다.');
    }, 0);
    alert('준비 중입니다.');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label='Global Navigation'>
        <div className={styles.branding}>
          <Link href='/' className={styles.logo} aria-label='Syntekabio 홈'>
            <img src={LOGO_IMAGE_SRC} alt='Syntekabio 로고' />
          </Link>

          <ul className={styles.menu} role='list'>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <label htmlFor='gnb-language' className='sr-only'>
            언어 선택
          </label>
          <Select
            id='gnb-language'
            aria-label='언어 선택'
            iconSrc={LANGUAGE_ICON_SRC}
            defaultValue='ko'
            options={[...LANGUAGE_OPTIONS]}
          />

          <span className='sr-only' aria-live='polite' role='status'>
            {statusMessage}
          </span>
          <Button type='button' onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
}
