import { useEffect, useState } from 'react';

/**
 * GNB 모바일 메뉴 상태 관리 로직.
 *
 * @returns 메뉴 열림/닫힘 상태 및 토글 함수
 */
export function useGnbMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * 모바일 메뉴를 엽니다.
   */
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  /**
   * 모바일 메뉴를 닫습니다.
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * 모바일 메뉴 열림/닫힘을 토글합니다.
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * 메뉴가 열렸을 때 body 스크롤을 방지하고,
   * 닫혔을 때 스크롤을 복원합니다.
   */
  useEffect(() => {
    if (isMenuOpen) {
      // 메뉴 열림: body 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 메뉴 닫힘: body 스크롤 복원
      document.body.style.overflow = '';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
}

