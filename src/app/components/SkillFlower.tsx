import { ReactNode } from 'react';

interface SkillFlowerProps {
  items: ReactNode[];
  center: ReactNode;
  size?: number;
}

export default function SkillFlower({ items, center, size = 1 }: SkillFlowerProps) {
  const [item1, item2, item3, item4, item5, item6] = items;

  const scale = size;

  return (
    <div
      className="my-20 flex h-30 w-30 origin-center items-center justify-center p-10"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        width: `${120 * scale}px`,
        height: `${120 * scale}px`,
      }}
    >
      {/* Item 1 - 左上角，红色渐变 */}
      <div className="absolute top-2 left-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-400 via-pink-500 to-red-600 shadow-lg shadow-red-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-400/50 hover:shadow-red-500/90">
        {item1}
      </div>

      {/* Item 2 - 左中，蓝色渐变 */}
      <div className="absolute top-1/2 -left-8 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 shadow-lg shadow-blue-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/50 hover:shadow-blue-500/90">
        {item2}
      </div>

      {/* Item 3 - 左下角，绿色渐变 */}
      <div className="absolute top-3/4 left-13 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 shadow-lg shadow-green-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/50 hover:shadow-green-500/90">
        {item3}
      </div>

      {/* 中心元素 - 紫色渐变 */}
      <div className="flex h-25 w-25 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 shadow-lg shadow-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/50 hover:shadow-purple-500/90">
        {center}
      </div>

      {/* Item 4 - 右上角，橙色渐变 */}
      <div className="absolute top-2 right-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 shadow-lg shadow-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/50 hover:shadow-orange-500/90">
        {item4}
      </div>

      {/* Item 5 - 右中，青色渐变 */}
      <div className="absolute top-1/2 -right-5 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 shadow-lg shadow-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:shadow-cyan-500/90">
        {item5}
      </div>

      {/* Item 6 - 右下角，黄色渐变 */}
      <div className="absolute right-2 bottom-2 flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-lime-500 to-yellow-600 shadow-lg shadow-yellow-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/50 hover:shadow-yellow-500/90">
        {item6}
      </div>
    </div>
  );
}
