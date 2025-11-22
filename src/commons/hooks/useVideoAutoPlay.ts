import { useEffect, useRef, useState } from 'react';

interface UseVideoAutoPlayOptions {
  /** 자동 재생을 활성화할 임계값 (0.0 ~ 1.0) */
  threshold?: number;
  /** 자동 재생 활성화 여부 */
  enabled?: boolean;
  /** rootMargin: intersection 감지 기준 늘리기 */
  rootMargin?: string;
}

/**
 * 비디오 섹션이 뷰포트에 들어오면 자동으로 재생하는 훅
 * Intersection Observer를 사용하여 섹션 가시성을 감지합니다.
 */
export const useVideoAutoPlay = ({
  threshold = 0.5,
  enabled = true,
  rootMargin = '0px',
}: UseVideoAutoPlayOptions = {}) => {
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false); // useState로 변경
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    console.log('🎬 useVideoAutoPlay init:', {
      enabled,
      hasRef: !!sectionRef.current,
      hasPlayed,
      shouldAutoPlay,
    });

    if (!enabled || !sectionRef.current || hasPlayed) {
      console.log('❌ Not starting observer - enabled:', enabled, 'hasRef:', !!sectionRef.current, 'hasPlayed:', hasPlayed);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('👀 Intersection:', {
            isIntersecting: entry.isIntersecting,
            hasPlayed,
            intersectionRatio: entry.intersectionRatio,
          });

          // 섹션이 뷰포트에 들어오고, 아직 자동 재생하지 않았을 때
          if (entry.isIntersecting && !hasPlayed) {
            console.log('✅ Triggering autoplay!');
            setShouldAutoPlay(true);
            setHasPlayed(true);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    console.log('📍 Starting observer with threshold:', threshold);
    observer.observe(sectionRef.current);

    return () => {
      console.log('🛑 Disconnecting observer');
      observer.disconnect();
    };
  }, [threshold, enabled, hasPlayed]);

  return {
    sectionRef,
    shouldAutoPlay,
  };
};

