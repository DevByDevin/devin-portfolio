'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className='fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
              Devin Han
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <a
              href='#about'
              className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
            >
              About
            </a>
            <a
              href='#skills'
              className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
            >
              Skills
            </a>
            <a
              href='#projects'
              className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
            >
              Projects
            </a>
            <a
              href='#contact'
              className='text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
            >
              Contact
            </a>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className='flex items-center space-x-4'>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            >
              {isDark ? '🌞' : '🌙'}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700'>
              <a
                href='#about'
                className='block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
              >
                About
              </a>
              <a
                href='#skills'
                className='block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
              >
                Skills
              </a>
              <a
                href='#projects'
                className='block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
              >
                Projects
              </a>
              <a
                href='#contact'
                className='block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
