import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
        <button
          ref={prevRef}
          type='button'
          className='swiper-button-prev'
          aria-label='이전 슬라이드'
        />
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
                prevEl: prevRef.current,
                nextEl: nextRef.current,
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
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSwiper={(swiper) => {
          // Swiper 초기화 후 다시 한번 ref 연결 확인
          if (navigation && typeof swiper.params.navigation !== 'boolean') {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index} className={equalHeight ? styles.equalHeightSlide : ''}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <button
          ref={nextRef}
          type='button'
          className='swiper-button-next'
          aria-label='다음 슬라이드'
        />
      )}

      {pagination && <div ref={setPaginationEl} className={styles.pagination} />}
    </div>
  );
};

