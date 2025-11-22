import { useState } from 'react';

export const useTabLogic = () => {
  // 기본 활성화 탭 ID 설정 ('tab1')
  const [activeTabId, setActiveTabId] = useState<string>('tab1');

  // 탭 클릭 핸들러
  const onClickTab = (id: string) => {
    setActiveTabId(id);
  };

  return {
    activeTabId,
    onClickTab,
  };
};
