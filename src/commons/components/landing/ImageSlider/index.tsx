import { Carousel, SlideCard } from '@/commons/components/ui/ImageSlider';
import styles from './styles.module.scss';

const IMAGE_SLIDER_CONTENT = {
  title: '테스트용 이미지 카드 단락입니다',
  description: [
    '면접 과제용으로 제작된 샘플 단락입니다.',
    '인터렉션, 코드 구조 등을 자유롭게 구현하세요.',
  ],
};

const SLIDER_ITEMS = [
  {
    id: 'slider-01',
    title: '과제용 카드',
    description: ['인터렉션, 코드 구조들을 자유롭게 구현하세요.'],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-02',
    title: '과제용 카드',
    description: [
      '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다.',
      '모든 내용은 테스트 목적의 더미 데이터입니다.',
    ],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-03',
    title: '과제용 카드',
    description: ['인터렉션, 코드 구조들을 자유롭게 구현하세요.'],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-04',
    title: '과제용 카드',
    description: ['인터렉션, 코드 구조들을 자유롭게 구현하세요.'],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-05',
    title: '과제용 카드',
    description: [
      '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은 테스트 목적의 더미 데이터입니다.이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다.',
      '모든 내용은 테스트 목적의 더미 데이터입니다',
    ],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
  {
    id: 'slider-06',
    title: '과제용 카드',
    description: [
      '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은 테스트 목적의 더미 데이터입니다.',
    ],
    imageSrc: '/images/image-slider1.png',
    imageAlt: '초록빛 능선 풍경 이미지',
  },
];

export const ImageSlider = () => {
  return (
    <section className={styles.section} aria-labelledby='card-heading'>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id='card-heading' className={styles.title}>
            {IMAGE_SLIDER_CONTENT.title}
          </h2>
          <p className={styles.description}>
            {IMAGE_SLIDER_CONTENT.description.map((line, index) => (
              <span key={`section-desc-${index}`}>{line}</span>
            ))}
          </p>
        </header>

        <Carousel
          spaceBetween={16}
          slidesPerView={1.2}
          loop={true}
          navigation={true}
          pagination={true}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
          }}
          navigationColor='#485c11'
          paginationColor='#485c11'
          equalHeight={true}
        >
          {SLIDER_ITEMS.map((item) => (
            <SlideCard key={item.id} imageSrc={item.imageSrc} imageAlt={item.imageAlt}>
              <p className={styles.cardHeading}>{item.title}</p>
              <div className={styles.cardDescription}>
                {item.description.map((line, index) => (
                  <p key={`${item.id}-desc-${index}`}>{line}</p>
                ))}
              </div>
            </SlideCard>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
