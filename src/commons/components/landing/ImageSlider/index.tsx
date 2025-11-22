import { Carousel, SlideCard } from '@/commons/components/ui/ImageSlider';
import { IMAGE_SLIDER_CONTENT, SLIDER_ITEMS } from '@/commons/constants/globalConstants';
import styles from './styles.module.scss';

export const ImageSlider = () => {
  return (
    <section id='image-slider' className={styles.section} aria-labelledby='card-heading'>
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
