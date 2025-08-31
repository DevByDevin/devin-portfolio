'use client';

import { useState } from 'react';

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700'>
      <div className='flex justify-around items-center py-3 px-4'>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              activeSection === item.id
                ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <span className='text-xs font-medium'>{item.label}</span>
            {activeSection === item.id && (
              <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
