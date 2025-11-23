import {
  HERO_DEVICE_IMAGE_MOBILE_SRC,
  HERO_DEVICE_IMAGE_SRC,
  IMAGE_TAB_SOURCES,
} from '@/commons/constants/images';
import type { ImageTabContent, NavItem, SelectOption, SliderItem } from '@/commons/constants/types';

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
 * 모바일 전용 네비게이션 메뉴 구조.
 * Home과 Service 그룹을 포함합니다.
 */
export const MOBILE_NAV_ITEMS = {
  home: { id: 'home', label: 'Home' },
  serviceGroup: {
    label: 'Service',
    items: NAV_ITEMS,
  },
} as const;

/**
 * 레이아웃에서 사용할 섹션 라벨 목록.
 * 접근성을 위한 aria-label에 사용됩니다.
 */
export const SECTION_LABELS = [
  'Hero Section',
  'Video Section',
  'Image Tab Section',
  'Image Slider Section',
];

/**
 * 언어 선택 셀렉트 옵션.
 * 다국어 관련 표기를 추가하려면 이 목록만 확장하세요.
 */
export const LANGUAGE_OPTIONS: SelectOption[] = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
];

/**
 * 로그인 알림 메시지.
 */
export const LOGIN_NOTICE_MESSAGE = '로그인 기능은 현재 준비 중입니다.';

/**
 * Hero 섹션 컨텐츠 상수.
 */
export const HERO_CONTENT = {
  badge: 'Syntekabio',
  title: '이 페이지는 테스트 중입니다',
  description: '면접 과제용으로 제작된 샘플 페이지입니다.',
};

export const HERO_MEDIA = {
  caption: '2021년부터 2024년까지 효율성 지표 변화를 시각화한 태블릿 화면',
  desktopSrc: HERO_DEVICE_IMAGE_SRC,
  mobileSrc: HERO_DEVICE_IMAGE_MOBILE_SRC,
  alt: '33개 지역의 효율성 지표가 연도별로 증가하는 모습을 보여주는 태블릿 화면',
  width: 907,
  height: 644,
};

/**
 * Video 섹션 컨텐츠 상수.
 */
export const VIDEO_CONTENT = {
  title: '테스트용 영상 단락',
  description: [
    '면접 과제용으로 제작된 샘플 영상 단락입니다.',
    '사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.',
  ],
  videoLabel: 'AI Bio-Supercom Center 홍보 영상',
} as const;

export const VIDEO_SOURCE = '/video/main.mp4';

/**
 * ImageTab 섹션 컨텐츠 상수.
 */
export const IMAGE_TAB_CONTENT = {
  title: '테스트용 탭 영역 단락 입니다',
  description: `면접 과제용으로 제작된 샘플 탭 단락입니다.\n인터렉션, 코드 구조등을 자유롭게 구현하세요.`,
};

export const TAB_LIST: ImageTabContent[] = [
  {
    id: 'tab1',
    label: '탭 영역 1',
    imageSrc: IMAGE_TAB_SOURCES.AREA_ONE,
    caption: '첫번째 탭 이미지',
  },
  {
    id: 'tab2',
    label: '탭 영역 2',
    imageSrc: IMAGE_TAB_SOURCES.AREA_TWO,
    caption: '두번째 탭 이미지',
  },
  {
    id: 'tab3',
    label: '탭 영역 3',
    imageSrc: IMAGE_TAB_SOURCES.AREA_THREE,
    caption: '세번째 탭 이미지',
  },
];

/**
 * ImageSlider 섹션 컨텐츠 상수.
 */
export const IMAGE_SLIDER_CONTENT = {
  title: '테스트용 이미지 카드 단락입니다',
  description: [
    '면접 과제용으로 제작된 샘플 단락입니다.',
    '인터렉션, 코드 구조 등을 자유롭게 구현하세요.',
  ],
};

/**
 * 이미지 슬라이더에서 사용할 이미지 목록.
 */
export const SLIDER_ITEMS: SliderItem[] = [
  {
    id: 'slider-01',
    title: '과제용 카드',
    description: ['인터렉션, 코드 구조들을 자유롭게 구현하세요.'],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-02',
    title: '과제용 카드',
    description: [
      '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다.',
      '모든 내용은 테스트 목적의 더미 데이터입니다.',
    ],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-03',
    title: '과제용 카드',
    description: ['인터렉션, 코드 구조들을 자유롭게 구현하세요.'],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-04',
    title: '과제용 카드',
    description: ['인터렉션, 코드 구조들을 자유롭게 구현하세요.'],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-05',
    title: '과제용 카드',
    description: [
      '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은 테스트 목적의 더미 데이터입니다.이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다.',
      '모든 내용은 테스트 목적의 더미 데이터입니다',
    ],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-06',
    title: '과제용 카드',
    description: [
      '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은 테스트 목적의 더미 데이터입니다.',
    ],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
];
