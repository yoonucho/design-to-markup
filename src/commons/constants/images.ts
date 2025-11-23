/**
 * 브랜드 로고 이미지 경로.
 * 헤더, 푸터 등 전역에서 동일한 자산을 사용하도록 통일합니다.
 */
export const LOGO_IMAGE_SRC = '/images/logo.svg';

/**
 * 언어 선택 셀렉트에서 사용하는 언어 아이콘 경로.
 */
export const LANGUAGE_ICON_SRC = '/icons/language-icon.svg';

/**
 * 모바일 GNB 햄버거 메뉴 아이콘 경로.
 */
export const MENU_ICON_SRC = '/icons/menu-icon.svg';

/**
 * 모바일 GNB 닫기 아이콘 경로.
 */
export const CLOSE_ICON_SRC = '/icons/close-icon.svg';

/**
 * 랜딩 히어로 섹션에 PC용  이미지 경로.
 */
export const HERO_DEVICE_IMAGE_SRC = '/images/hero-image.png';

/**
 * 랜딩 히어로 섹션 모바일용 이미지 경로.
 */
export const HERO_DEVICE_IMAGE_MOBILE_SRC = '/images/mo/hero-image-m.png';

/**
 * 랜딩 비디오 섹션 PC용 비디오 커버 이미지 경로.
 */
export const VIDEO_SECTION_COVER_SRC = '/images/video-cover.png';

/**
 * 랜딩 비디오 섹션 모바일용 비디오 커버 이미지 경로.
 */
export const VIDEO_SECTION_COVER_MOBILE_SRC = '/images/mo/video-cover-m.png';

/**
 * 랜딩 페이지 이미지 탭 전용 정적 자산 경로.
 * 피그마 시안 기반 이미지 세트를 하나의 객체로 묶어 관리한다.
 */
export const IMAGE_TAB_SOURCES = {
  AREA_ONE: '/images/Image-tab1.png',
  AREA_TWO: '/images/Image-tab2.png',
  AREA_THREE: '/images/Image-tab3.png',
} as const;
