import styles from '@/commons/components/landing/ImageTab/styles.module.scss';
import { IMAGE_TAB_SOURCES } from '@/commons/constants/images';

type ImageTabContent = {
  id: string;
  label: string;
  imageSrc: string;
  caption: string;
};

const SECTION_COPY = {
  title: '테스트용 탭 영역 단락 입니다',
  description: `면접 과제용으로 제작된 샘플 탭 단락입니다.\n인터렉션, 코드 구조등을 자유롭게 구현하세요.`,
};

const TAB_LIST: ImageTabContent[] = [
  {
    id: 'tab1',
    label: '탭 영역 1',
    imageSrc: IMAGE_TAB_SOURCES.AREA_ONE,
    caption: '첫번째 탭 이미지',
  },
  {
    id: 'tab2',
    label: '탭 영역 2',
    imageSrc: IMAGE_TAB_SOURCES.AREA_TWO,
    caption: '두번째 탭 이미지',
  },
  {
    id: 'tab3',
    label: '탭 영역 3',
    imageSrc: IMAGE_TAB_SOURCES.AREA_THREE,
    caption: '세번째 탭 이미지',
  },
];

export const ImageTab = () => {
  const activeTab = TAB_LIST[0];

  return (
    <section className={styles.section} aria-labelledby='image-tab-heading'>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id='image-tab-heading' className={styles.title}>
            {SECTION_COPY.title}
          </h2>
          <p className={styles.subtitle}>{SECTION_COPY.description}</p>
        </header>

        <div className={styles.tabNavigation}>
          <ul className={styles.tabList} role='tablist' aria-label='탭 영역 이미지 전환'>
            {TAB_LIST.map((tab) => {
              const isActive = activeTab.id === tab.id;
              return (
                <li
                  key={tab.id}
                  className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
                  role='tab'
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <button type='button' className={styles.tabButton} tabIndex={-1}>
                    {tab.label}
                    {isActive && <span className='sr-only'>선택됨</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <section
          className={styles.panel}
          role='tabpanel'
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
        >
          <figure className={styles.figure}>
            <div className={styles.imageWrapper}>
              <img src={activeTab.imageSrc} alt={activeTab.caption} loading='lazy' />
              <div className={styles.imageOverlay} aria-hidden='true' />
            </div>
            <figcaption className='sr-only'>{activeTab.caption}</figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
};
