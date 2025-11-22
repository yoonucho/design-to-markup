import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from '@/commons/components/landing/Video/styles.module.scss';
import { PlayButton } from '@/commons/components/ui/PlayButton';
import { VIDEO_CONTENT, VIDEO_SOURCE } from '@/commons/constants/globalConstants';
import {
  VIDEO_SECTION_COVER_MOBILE_SRC,
  VIDEO_SECTION_COVER_SRC,
} from '@/commons/constants/images';
import { useVideoAutoPlay } from '@/commons/hooks/useVideoAutoPlay';

export const Video = () => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasAutoPlayedRef = useRef(false); // 자동 재생 여부 추적

  // 스크롤 시 자동 재생 감지
  const { sectionRef, shouldAutoPlay } = useVideoAutoPlay({
    threshold: 0.5, // 섹션의 50%가 보일 때 활성화
    enabled: true,
  });

  const handleActivatePlayer = useCallback(() => {
    setIsPlayerVisible(true);
  }, []);

  // 비디오 종료 시 플레이어 숨기기 (커버 이미지로 복원)
  const handleVideoEnded = useCallback(() => {
    setIsPlayerVisible(false);
  }, []);

  // 스크롤로 섹션 진입 시 자동 재생 (한 번만)
  useEffect(() => {
    if (shouldAutoPlay && !isPlayerVisible && !hasAutoPlayedRef.current) {
      setIsPlayerVisible(true);
      hasAutoPlayedRef.current = true; // 자동 재생 완료 표시
    }
  }, [shouldAutoPlay, isPlayerVisible]);

  useEffect(() => {
    if (isPlayerVisible && videoRef.current) {
      videoRef.current.focus({ preventScroll: true });
      videoRef.current.play().catch(() => undefined);
    }
  }, [isPlayerVisible]);

  return (
    <section id='video' ref={sectionRef} className={styles.section} aria-labelledby='video-heading'>
      <div className={styles.inner}>
        <header className={styles.textGroup}>
          <h2 id='video-heading' className={styles.title}>
            {VIDEO_CONTENT.title}
          </h2>
          <p className={styles.description}>
            {VIDEO_CONTENT.description[0]}
            <br />
            {VIDEO_CONTENT.description[1]}
          </p>
        </header>

        <div className={styles.player}>
          <figure className={styles.playerFrame} aria-label={VIDEO_CONTENT.videoLabel}>
            {isPlayerVisible ? (
              <video
                id='promo-video'
                ref={videoRef}
                className={styles.video}
                src={VIDEO_SOURCE}
                playsInline
                preload='auto'
                controls
                onEnded={handleVideoEnded}
              />
            ) : (
              <>
                <picture>
                  <source media='(max-width: 768px)' srcSet={VIDEO_SECTION_COVER_MOBILE_SRC} />
                  <source media='(min-width: 769px)' srcSet={VIDEO_SECTION_COVER_SRC} />
                  <Image
                    src={VIDEO_SECTION_COVER_SRC}
                    alt={VIDEO_CONTENT.videoLabel}
                    width={892}
                    height={504}
                    className={styles.poster}
                    loading='lazy'
                  />
                </picture>
                <PlayButton
                  size='small'
                  className={styles.playButton}
                  aria-controls='promo-video'
                  onClick={handleActivatePlayer}
                  srLabel='영상 재생'
                  showCircle
                />
              </>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
};
