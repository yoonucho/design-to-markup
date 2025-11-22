import { useEffect, useState } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

/**
 * 스크롤 위치에 따라 현재 활성화된 섹션 ID를 반환하는 훅
 * @param sectionIds - 관찰할 섹션 ID 배열
 * @param offset - 활성화 기준이 되는 오프셋 (기본값: 100)
 */
export const useScrollSpy = ({ sectionIds, offset = 100 }: UseScrollSpyOptions) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // 모든 섹션을 순회하면서 현재 스크롤 위치에 있는 섹션 찾기
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // 현재 스크롤 위치가 섹션 범위 내에 있으면 활성화
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveId(sectionId);
            break;
          }
        }
      }

      // 최상단에 있을 때는 첫 번째 섹션 활성화
      if (window.scrollY < offset && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };

    // 초기 실행
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};

