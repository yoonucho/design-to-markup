import { useEffect, useRef, useState } from 'react';

interface UseVideoAutoPlayOptions {
  /** 자동 재생을 활성화할 임계값 (0.0 ~ 1.0) */
  threshold?: number;
  /** 자동 재생 활성화 여부 */
  enabled?: boolean;
}

/**
 * 비디오 섹션이 뷰포트에 들어오면 자동으로 재생하는 훅
 * Intersection Observer를 사용하여 섹션 가시성을 감지합니다.
 */
export const useVideoAutoPlay = ({
  threshold = 0.5,
  enabled = true,
}: UseVideoAutoPlayOptions = {}) => {
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasPlayedRef = useRef(false); // 한 번만 자동 재생

  useEffect(() => {
    if (!enabled || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 섹션이 뷰포트에 들어오고, 아직 자동 재생하지 않았을 때
          if (entry.isIntersecting && !hasPlayedRef.current) {
            setShouldAutoPlay(true);
            hasPlayedRef.current = true;
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, enabled]);

  return {
    sectionRef,
    shouldAutoPlay,
  };
};

