import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Hook to get the current URL path

  // This effect runs every time the 'pathname' changes
  useEffect(() => {
    // Use the native window method for an instant jump to top
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname

  return null; // This component does not render anything itself
}

export default ScrollToTop;