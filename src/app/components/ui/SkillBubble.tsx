'use client';

import { SkillBubbleItem } from '../../constants/skillBubble';
import { useState } from 'react';
import { useResponsiveSize } from '../../hooks/useResponsiveSize';

interface SkillFlowerProps {
  items: SkillBubbleItem[];
}

export default function SkillBubble({ items }: SkillFlowerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const itemSize = useResponsiveSize({
    mobile: 60,
    desktop: 80,
    breakpoint: 768,
  });

  const gapSize = useResponsiveSize({
    mobile: 2,
    desktop: 6,
    breakpoint: 768,
  });

  const paddingSize = useResponsiveSize({
    mobile: 4,
    desktop: 12,
    breakpoint: 768,
  });

  const getTransformStyle = (index: number) => {
    if (hoveredIndex === null) {
      return { transform: 'scale(1)', zIndex: 'auto' };
    }

    if (hoveredIndex === index) {
      return {
        transform: 'scale(1.2)',
        zIndex: '20',
        transition: 'all 0.3s ease-out',
        filter:
          'drop-shadow(0 0 20px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.4))',
      };
    }

    const hoveredRow = Math.floor(hoveredIndex / 5);
    const hoveredCol = hoveredIndex % 5;
    const currentRow = Math.floor(index / 5);
    const currentCol = index % 5;

    const distance = Math.sqrt(
      Math.pow(currentRow - hoveredRow, 2) + Math.pow(currentCol - hoveredCol, 2)
    );

    if (distance <= 2) {
      const angle = Math.atan2(currentRow - hoveredRow, currentCol - hoveredCol);
      const pushDistance = Math.max(0, (2 - distance) * (itemSize * 0.25));

      return {
        transform: `translate(${Math.cos(angle) * pushDistance}px, ${Math.sin(angle) * pushDistance}px) scale(0.9)`,
        zIndex: '10',
        transition: 'all 0.3s ease-out',
      };
    }

    return { transform: 'scale(0.9)', zIndex: '5' };
  };

  return (
    <div
      className="grid grid-cols-5 grid-rows-5"
      style={{
        gap: `${gapSize * 4}px`,
        padding: `${paddingSize * 4}px`,
      }}
    >
      {items.map((item, index) => {
        const clx = `flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl`;
        const transformStyle = getTransformStyle(index);

        return (
          <div
            key={item.index}
            className="group flex items-center justify-center p-0 transition-all duration-300 ease-out"
            style={{
              ...transformStyle,
              height: `${itemSize}px`,
              width: `${itemSize}px`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={clx}
              style={{
                height: `${itemSize}px`,
                width: `${itemSize}px`,
                backgroundColor: item.color,
              }}
            >
              {item.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
}
