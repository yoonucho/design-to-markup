import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import styles from './styles.module.scss';

export interface CarouselProps {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  breakpoints?: SwiperOptions['breakpoints'];
  className?: string;
  navigationColor?: string;
  paginationColor?: string;
  /** 모든 슬라이드의 높이를 동일하게 맞춤 (기본값: false) */
  equalHeight?: boolean;
}

export const Carousel = ({
  children,
  spaceBetween = 16,
  slidesPerView = 1,
  loop = true,
  navigation = true,
  pagination = true,
  breakpoints,
  className = '',
  navigationColor = '#000000',
  paginationColor = '#000000',
  equalHeight = false,
}: CarouselProps) => {
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);
  // callback refs so we can react when the DOM nodes are attached
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const swiperInstanceRef = useRef<any>(null);
  // Ensure navigation init once both swiper instance and nav elements are available
  useEffect(() => {
    const s = swiperInstanceRef.current;
    if (s && navigation && prevEl && nextEl && typeof s.params.navigation !== 'boolean') {
      // @ts-ignore
      s.params.navigation.prevEl = prevEl;
      // @ts-ignore
      s.params.navigation.nextEl = nextEl;
      try {
        s.navigation.init();
        s.navigation.update();
      } catch (e) {
        // swallow — Swiper may already be initialized; update will handle it
      }
    }
  }, [prevEl, nextEl, navigation]);

  // children을 배열로 변환
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div
      className={`${styles.carouselWrapper} ${className}`}
      style={
        {
          '--navigation-color': navigationColor,
          '--pagination-color': paginationColor,
        } as React.CSSProperties
      }
    >
      {navigation && (
        <>
          <button
            ref={setPrevEl}
            type='button'
            className='swiper-button-prev'
            aria-label='이전 슬라이드'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.5 9L4.5 6L7.5 3'
                stroke='currentColor'
                strokeWidth='1.2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>

          <button
            ref={setNextEl}
            type='button'
            className='swiper-button-next'
            aria-label='다음 슬라이드'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.5 3L7.5 6L4.5 9'
                stroke='currentColor'
                strokeWidth='1.2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </>
      )}

      <Swiper
        className={`${styles.swiper} ${equalHeight ? styles.equalHeight : ''}`}
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        centeredSlides={false}
        navigation={
          navigation
            ? {
                prevEl: prevEl,
                nextEl: nextEl,
              }
            : false
        }
        pagination={
          pagination
            ? {
                el: paginationEl,
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }
            : false
        }
        breakpoints={breakpoints}
        onBeforeInit={(swiper) => {
          if (navigation && typeof swiper.params.navigation !== 'boolean') {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevEl;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextEl;
          }
        }}
        onSwiper={(swiper) => {
          // store instance and ensure navigation is initialized when elements are ready
          swiperInstanceRef.current = swiper;
          if (navigation && typeof swiper.params.navigation !== 'boolean') {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevEl;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextEl;
            try {
              swiper.navigation.init();
              swiper.navigation.update();
            } catch (e) {
              // ignore init errors — we'll retry from effect when refs are attached
            }
          }
        }}
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index} className={equalHeight ? styles.equalHeightSlide : ''}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* navigation buttons rendered before Swiper via callback refs above */}

      {pagination && <div ref={setPaginationEl} className={styles.pagination} />}
    </div>
  );
};
