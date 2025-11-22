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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleActivatePlayer = useCallback(() => {
    setIsPlayerVisible(true);
  }, []);

  useEffect(() => {
    if (isPlayerVisible && videoRef.current) {
      videoRef.current.focus({ preventScroll: true });
      videoRef.current.play().catch(() => undefined);
    }
  }, [isPlayerVisible]);

  return (
    <section id='video' className={styles.section} aria-labelledby='video-heading'>
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
