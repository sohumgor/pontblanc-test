
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Changed from 'smooth' to 'auto' for instant scrolling
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
