import { HERO_CONTENT, HERO_MEDIA } from '@/commons/constants/globalConstants';
import Image from 'next/image';
import styles from './styles.module.scss';

export const Hero = () => (
  <section id='hero' className={styles.section} aria-labelledby='hero-heading'>
    <div>
      <div className={styles.inner}>
        <header className={styles.textGroup}>
          <span className={styles.badge}>{HERO_CONTENT.badge}</span>
          <h2 id='hero-heading' className={styles.title}>
            {HERO_CONTENT.title}
          </h2>
          <p className={styles.description}>{HERO_CONTENT.description}</p>
        </header>
      </div>
      <figure className={styles.visual} aria-labelledby='hero-visual-caption'>
        <div className={styles.device}>
          <div className={styles.deviceFrame}>
            <picture className={styles.picture}>
              <source media='(max-width: 768px)' srcSet={HERO_MEDIA.mobileSrc} />
              <source media='(min-width: 769px)' srcSet={HERO_MEDIA.desktopSrc} />
              <Image
                src={HERO_MEDIA.desktopSrc}
                alt={HERO_MEDIA.alt}
                className={styles.deviceImage}
                width={HERO_MEDIA.width}
                height={HERO_MEDIA.height}
                sizes='(max-width: 768px) 90vw, 907px'
                priority
              />
            </picture>
          </div>
        </div>
        <figcaption id='hero-visual-caption' className='sr-only'>
          {HERO_MEDIA.caption}
        </figcaption>
      </figure>
    </div>
  </section>
);
