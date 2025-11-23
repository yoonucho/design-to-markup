import { useCallback, useEffect, useRef, useState } from 'react';

const OBSERVER_THRESHOLD = 0.6;

/**
 * 비디오 요소를 수동 재생 전용으로 제어하고, 뷰포트 밖에서는 자동으로 정지시킵니다.
 * @returns {{ videoRef: React.RefObject<HTMLVideoElement>; isPlaying: boolean; handleTogglePlayback: () => void }}
 * 사용자의 재생/일시정지 토글과 재생 상태를 노출합니다.
 */
export const useVideoAutoplay = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || typeof window === 'undefined') {
      return;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      videoElement.currentTime = 0;
    };

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('ended', handleEnded);

    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            ([entry]) => {
              if (!entry || !videoElement) {
                return;
              }

              if (!entry.isIntersecting && !videoElement.paused) {
                videoElement.pause();
                videoElement.currentTime = 0;
              }
            },
            { threshold: OBSERVER_THRESHOLD },
          )
        : null;

    if (observer) {
      observer.observe(videoElement);
    }

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('ended', handleEnded);
      observer?.disconnect();
    };
  }, []);

  const handleTogglePlayback = useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    if (videoElement.paused) {
      videoElement.play().catch(() => undefined);
    } else {
      videoElement.pause();
    }
  }, []);

  return {
    videoRef,
    isPlaying,
    handleTogglePlayback,
  };
};
