import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const isClient = typeof window !== 'undefined';

  // مقدار اولیه از عرض کنونی یا false در سرور
  const [isMobile, setIsMobile] = useState(() =>
    isClient ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (!isClient) return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = ({ matches }) => setIsMobile(matches);

    // ثبت listener با پشتیبانی از روش جدید و قدیمی
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    // همگام‌سازی اولیه state
    setIsMobile(mediaQuery.matches);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [breakpoint, isClient]);

  return isMobile;
};

export default useIsMobile;
