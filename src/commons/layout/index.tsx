import { SkipLink } from '@/commons/components/ui/SkipLink';
import Gnb from '@/commons/layout/Gnb';
import styles from '@/commons/layout/styles.module.scss';
import { Children, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const SECTION_LABELS = [
  'Hero Section',
  'Video Section',
  'Image Tab Section',
  'Image Slider Section',
];

export default function Layout({ children }: LayoutProps) {
  const sectionChildren = Children.toArray(children);

  return (
    <div className={styles.wrapper}>
      <SkipLink lang='ko'>과제전형 본문으로 건너뛰기</SkipLink>
      <Gnb />
      <main id='main-content' tabIndex={-1} className={styles.main}>
        <h1 className='sr-only' lang='ko'>
          신테카바이오 과제전형 본문
        </h1>
        {sectionChildren.length == 0 ? (
          <section className={styles.emptyState}>
            <p>레이아웃에 표시할 섹션이 없습니다.</p>
          </section>
        ) : (
          sectionChildren.map((section, index) => (
            <div
              key={`layout-section-${index}`}
              className={styles.sectionSlot}
              aria-label={SECTION_LABELS[index] ?? `레이아웃 섹션 ${index + 1}`}
            >
              {section}
            </div>
          ))
        )}
      </main>
    </div>
  );
}
