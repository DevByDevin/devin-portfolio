import { useState, useEffect } from 'react';

interface ResponsiveSizeConfig {
  mobile: number;
  desktop: number;
  breakpoint?: number;
}

export function useResponsiveSize(config: ResponsiveSizeConfig) {
  const { mobile, desktop, breakpoint = 640 } = config;
  const [size, setSize] = useState(mobile);

  useEffect(() => {
    const updateSize = () => {
      const screenSize = window.innerWidth;
      const newSize = screenSize < breakpoint ? mobile : desktop;
      setSize(newSize);
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [mobile, desktop, breakpoint]);

  return size;
}
