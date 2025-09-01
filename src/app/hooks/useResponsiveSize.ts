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

    // 设置初始尺寸
    updateSize();

    // 添加窗口大小变化监听器
    window.addEventListener('resize', updateSize);

    // 清理事件监听器
    return () => window.removeEventListener('resize', updateSize);
  }, [mobile, desktop, breakpoint]);

  return size;
}
