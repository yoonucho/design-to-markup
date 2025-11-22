import { HERO_DEVICE_IMAGE_MOBILE_SRC, HERO_DEVICE_IMAGE_SRC } from '@/commons/constants/images';
import Image from 'next/image';
import styles from './styles.module.scss';

const HERO_CONTENT = {
  badge: 'Syntekabio',
  title: '이 페이지는 테스트 중입니다',
  description: '면접 과제용으로 제작된 샘플 페이지입니다.',
};

const HERO_MEDIA = {
  caption: '2021년부터 2024년까지 효율성 지표 변화를 시각화한 태블릿 화면',
  desktopSrc: HERO_DEVICE_IMAGE_SRC,
  mobileSrc: HERO_DEVICE_IMAGE_MOBILE_SRC,
  alt: '33개 지역의 효율성 지표가 연도별로 증가하는 모습을 보여주는 태블릿 화면',
  width: 907,
  height: 644,
};

export const Hero = () => (
  <section className={styles.section} aria-labelledby='hero-heading'>
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
