import { KeyboardEvent } from 'react';

import styles from '@/commons/components/landing/ImageTab/styles.module.scss';
import { IMAGE_TAB_CONTENT, TAB_LIST } from '@/commons/constants/globalConstants';
import { useImageTab } from '@/commons/hooks/useImageTab';

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
  const activeTab = TAB_LIST.find((tab) => tab.id === activeTabId) ?? TAB_LIST[0];

  return (
    <section id='image-tab' className={styles.section} aria-labelledby='image-tab-heading'>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id='image-tab-heading' className={styles.title}>
            {IMAGE_TAB_CONTENT.title}
          </h2>
          <p className={styles.subtitle}>{IMAGE_TAB_CONTENT.description}</p>
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
            <figcaption className='sr-only'>{activeTab.caption}</figcaption>
          </figure>
        </section>
      </div>
    </section>
  );
};
