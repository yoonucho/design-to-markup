import { Button } from '@/commons/components/ui/Button';
import { Select } from '@/commons/components/ui/Select';
import { LANGUAGE_OPTIONS, NAV_ITEMS } from '@/commons/constants/globalConstants';
import { LANGUAGE_ICON_SRC, LOGO_IMAGE_SRC } from '@/commons/constants/images';
import { useLoginNotice } from '@/commons/hooks/useLoginNotice';
import styles from '@/commons/layout/Gnb/styles.module.scss';
import Link from 'next/link';

export default function Gnb() {
  const { loginStatusMessage, handleLoginClick } = useLoginNotice();

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
            {loginStatusMessage}
          </span>
          <Button type='button' onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
}
