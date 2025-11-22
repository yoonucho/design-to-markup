import type { SelectOption } from '@/commons/components/ui/Select';

export interface NavItem {
  id: string;
  label: string;
}

/**
 * 전역 네비게이션에서 사용할 섹션 앵커 목록.
 * 레이아웃/섹션 구조가 변경되면 이 목록만 수정하면 됩니다.
 */
export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Hero section' },
  { id: 'video', label: 'Video section' },
  { id: 'image-tab', label: 'Image tab section' },
  { id: 'image-slider', label: 'Image slider section' },
];

/**
 * 언어 선택 셀렉트 옵션.
 * 다국어 관련 표기를 추가하려면 이 목록만 확장하세요.
 */
export const LANGUAGE_OPTIONS: SelectOption[] = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
];
