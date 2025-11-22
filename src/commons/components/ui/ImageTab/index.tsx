import { KeyboardEvent } from 'react';

import { IMAGE_TAB_SOURCES } from '@/commons/constants/images';
import { useImageTab } from '@/commons/hooks/useImageTab';

import styles from './styles.module.scss';

type DemoTab = {
  id: string;
  label: string;
  imageSrc: string;
  caption: string;
};

const DEMO_TABS: DemoTab[] = [
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

const handleKeyDown =
  (onClick: (id: string) => void, tabId: string) => (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(tabId);
    }
  };

export interface ImageTabProps {
  defaultActiveTabId?: string;
  onTabChange?: (id: string) => void;
}

export const ImageTab = ({ defaultActiveTabId = 'tab1', onTabChange }: ImageTabProps) => {
  const { activeTabId, onClickTab } = useImageTab({
    initialActiveTabId: defaultActiveTabId,
    onChange: onTabChange,
  });
  const activeTab = DEMO_TABS.find((tab) => tab.id === activeTabId) ?? DEMO_TABS[0];

  return (
    <section id='image-tab' className={styles.section} aria-labelledby='ui-image-tab-heading'>
      <div className={styles.inner}>
        <div className={styles.tabNavigation}>
          <ul className={styles.tabList} role='tablist' aria-label='이미지 탭 전환'>
            {DEMO_TABS.map((tab) => {
              const isActive = tab.id === activeTab.id;
              return (
                <li
                  key={tab.id}
                  className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
                  role='tab'
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => onClickTab(tab.id)}
                  onKeyDown={handleKeyDown(onClickTab, tab.id)}
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
            <figcaption className={styles.caption}>
              <strong>{activeTab.caption}</strong>
            </figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
};
