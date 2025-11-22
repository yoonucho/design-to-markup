import { useCallback, useState } from 'react';
import { LOGIN_NOTICE_MESSAGE } from '@/commons/constants/globalConstants';

export interface UseLoginNoticeResult {
  loginStatusMessage: string;
  handleLoginClick: () => void;
}

export const useLoginNotice = (): UseLoginNoticeResult => {
  const [loginStatusMessage, setLoginStatusMessage] = useState('');

  const handleLoginClick = useCallback(() => {
    setLoginStatusMessage('');
    setTimeout(() => setLoginStatusMessage(LOGIN_NOTICE_MESSAGE), 0);
    alert('준비 중입니다.');
  }, []);

  return {
    loginStatusMessage,
    handleLoginClick,
  };
};
