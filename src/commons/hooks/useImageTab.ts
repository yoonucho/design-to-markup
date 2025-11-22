import { useCallback, useEffect, useState } from 'react';

export interface UseImageTabOptions {
  initialActiveTabId?: string;
  onChange?: (id: string) => void;
}

export const useImageTab = (options?: UseImageTabOptions) => {
  const { initialActiveTabId = 'tab1', onChange } = options ?? {};
  const [activeTabId, setActiveTabId] = useState<string>(initialActiveTabId);

  useEffect(() => {
    setActiveTabId(initialActiveTabId);
  }, [initialActiveTabId]);

  const onClickTab = useCallback(
    (id: string) => {
      setActiveTabId(id);
      onChange?.(id);
    },
    [onChange],
  );

  return {
    activeTabId,
    onClickTab,
  };
};
