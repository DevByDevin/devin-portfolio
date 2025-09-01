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
      className="my-8 flex origin-center items-center justify-center p-4 sm:mt-14 sm:mb-24 sm:p-6"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        width: `${80 * scale}px`,
        height: `${80 * scale}px`,
      }}
    >
      <div className="absolute top-1 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-400 via-pink-500 to-red-600 shadow-lg shadow-red-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-400/50 hover:shadow-red-500/90 sm:top-0 sm:left-6 sm:h-12 sm:w-12">
        {item1}
      </div>

      <div className="absolute top-1/2 -left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 shadow-lg shadow-blue-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/50 hover:shadow-blue-500/90 sm:-left-8 sm:h-16 sm:w-16">
        {item2}
      </div>

      <div className="absolute top-3/4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 shadow-lg shadow-green-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/50 hover:shadow-green-500/90 sm:left-4 sm:h-12 sm:w-12">
        {item3}
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 shadow-lg shadow-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/50 hover:shadow-purple-500/90 sm:h-14 sm:w-14">
        {center}
      </div>

      <div className="absolute top-1 right-1 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 shadow-lg shadow-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/50 hover:shadow-orange-500/90 sm:top-1 sm:-right-1 sm:h-15 sm:w-15">
        {item4}
      </div>

      <div className="absolute top-1/2 -right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 shadow-lg shadow-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 hover:shadow-cyan-500/90 sm:top-3/5 sm:-right-8 sm:h-12 sm:w-12">
        {item5}
      </div>

      <div className="absolute right-1 bottom-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-lime-500 to-yellow-600 shadow-lg shadow-yellow-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/50 hover:shadow-yellow-500/90 sm:right-1 sm:-bottom-4 sm:h-14 sm:w-14">
        {item6}
      </div>
    </div>
  );
}
