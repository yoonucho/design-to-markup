import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from '@/commons/components/landing/Video/styles.module.scss';
import { PlayButton } from '@/commons/components/ui/PlayButton';
import { VIDEO_CONTENT, VIDEO_SOURCE } from '@/commons/constants/globalConstants';
import {
  VIDEO_SECTION_COVER_MOBILE_SRC,
  VIDEO_SECTION_COVER_SRC,
} from '@/commons/constants/images';
export const Video = () => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [shouldMute, setShouldMute] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAutoPlayedRef = useRef(false);

  const handleActivatePlayer = useCallback(() => {
    setShouldMute(false);
    setIsPlayerVisible(true);
  }, []);

  // 비디오 종료 시 플레이어 숨기기 (커버 이미지로 복원)
  const handleVideoEnded = useCallback(() => {
    setIsPlayerVisible(false);
  }, []);

  // 스크롤로 섹션 진입 시 자동 재생 (GNB와 동일한 기준 offset 80px)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasAutoPlayedRef.current) return;

      const OFFSET = 80;
      const sectionTop = sectionRef.current.offsetTop;
      const triggerPosition = window.scrollY + OFFSET;

      if (triggerPosition >= sectionTop) {
        setShouldMute(true);
        setIsPlayerVisible(true);
        hasAutoPlayedRef.current = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                muted={shouldMute}
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
