import { Button } from '@/commons/components/ui/Button';
import { Select } from '@/commons/components/ui/Select';
import { LANGUAGE_OPTIONS, MOBILE_NAV_ITEMS, NAV_ITEMS } from '@/commons/constants/globalConstants';
import {
  CLOSE_ICON_SRC,
  LANGUAGE_ICON_SRC,
  LOGO_IMAGE_SRC,
  MENU_ICON_SRC,
} from '@/commons/constants/images';
import { useLoginNotice } from '@/commons/hooks/useLoginNotice';
import { useScrollSpy } from '@/commons/hooks/useScrollSpy';
import { useGnbMenu } from '@/commons/layout/Gnb/logic';
import styles from '@/commons/layout/Gnb/styles.module.scss';
import Link from 'next/link';

export default function Gnb() {
  const { loginStatusMessage, handleLoginClick } = useLoginNotice();
  const { isMenuOpen, openMenu, closeMenu } = useGnbMenu();
  const activeSection = useScrollSpy({
    sectionIds: NAV_ITEMS.map((item) => item.id),
    offset: 80, // GNB 높이 + 여유 공간
  });

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <nav className={styles.navigation} aria-label='Global Navigation'>
        {/* 데스크탑 브랜딩 */}
        <div className={styles.branding}>
          <Link href='/' className={styles.logo} aria-label='Syntekabio 홈'>
            <img src={LOGO_IMAGE_SRC} alt='Syntekabio 로고' />
          </Link>

          {/* 데스크탑 메뉴 */}
          <ul className={styles.menu} role='list'>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className={`${styles.menuItem} ${isActive ? styles.active : ''}`}>
                  <a href={`#${item.id}`} aria-current={isActive ? 'page' : undefined}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 데스크탑 액션 버튼들 */}
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

        {/* 모바일 햄버거 아이콘 */}
        <button
          type='button'
          className={styles.hamburger}
          onClick={openMenu}
          aria-label='메뉴 열기'
          aria-expanded={isMenuOpen}
        >
          <img src={MENU_ICON_SRC} alt='' />
        </button>
      </nav>

      {/* 모바일 전체 화면 오버레이 메뉴 */}
      {isMenuOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileHeader}>
            <Link
              href='/'
              className={styles.mobileLogo}
              aria-label='Syntekabio 홈'
              onClick={closeMenu}
            >
              <img src={LOGO_IMAGE_SRC} alt='Syntekabio 로고' />
            </Link>
            <button
              type='button'
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label='메뉴 닫기'
            >
              <img src={CLOSE_ICON_SRC} alt='' />
            </button>
          </div>

          <div className={styles.mobileContent}>
            <div className={styles.mobileMenuItems}>
              {/* Home 메뉴 */}
              <div className={styles.mobileMenuItem}>
                <a href='#hero' className={styles.mobileMenuLink} onClick={closeMenu}>
                  {MOBILE_NAV_ITEMS.home.label}
                </a>
              </div>

              {/* Service 그룹 헤더 */}
              <div className={styles.mobileMenuGroup}>
                <div className={styles.mobileMenuGroupHeader}>
                  {MOBILE_NAV_ITEMS.serviceGroup.label}
                </div>

                {/* Service 서브 메뉴들 */}
                {MOBILE_NAV_ITEMS.serviceGroup.items.map((item) => (
                  <div key={item.id} className={styles.mobileMenuSubItem}>
                    <a
                      href={`#${item.id}`}
                      className={styles.mobileMenuSubLink}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>

              {/* 언어 선택 */}
              <div className={styles.mobileLanguageWrapper}>
                <label htmlFor='mobile-language' className='sr-only'>
                  언어 선택
                </label>
                <Select
                  id='mobile-language'
                  aria-label='언어 선택'
                  iconSrc={LANGUAGE_ICON_SRC}
                  defaultValue='ko'
                  options={[...LANGUAGE_OPTIONS]}
                />
              </div>
            </div>

            {/* 하단 고정 로그인 버튼 */}
            <div className={styles.mobileFooter}>
              <span className='sr-only' aria-live='polite' role='status'>
                {loginStatusMessage}
              </span>
              <Button
                type='button'
                onClick={() => {
                  handleLoginClick();
                  closeMenu();
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
