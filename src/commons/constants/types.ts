/**
 * 전역 타입 정의
 * 프로젝트 전역에서 사용되는 공통 타입 및 인터페이스
 */

/**
 * 네비게이션 아이템 타입
 */
export interface NavItem {
  id: string;
  label: string;
}

/**
 * 이미지 탭 컨텐츠 타입
 */
export interface ImageTabContent {
  id: string;
  label: string;
  imageSrc: string;
  caption: string;
}

/**
 * 셀렉트 옵션 타입
 */
export interface SelectOption {
  value: string;
  label: string;
}

/**
 * 슬라이더 아이템 타입
 */
export interface SliderItem {
  id: string;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
}

