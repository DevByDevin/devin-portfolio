'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  LAYOUT_STYLES,
  TYPOGRAPHY_STYLES,
  BUTTON_STYLES,
  NAVIGATION_STYLES,
} from '../constants/styles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={NAVIGATION_STYLES.header}>
      <div className={NAVIGATION_STYLES.headerContainer}>
        <div className={NAVIGATION_STYLES.headerContent}>
          <div className={NAVIGATION_STYLES.navItem}>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Devin Han</h1>
          </div>

          <nav className={NAVIGATION_STYLES.navItems}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${BUTTON_STYLES.navButton} ${
                  activeSection === item.id
                    ? BUTTON_STYLES.navButtonActive
                    : BUTTON_STYLES.navButtonInactive
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={BUTTON_STYLES.themeButton}
              aria-label={`Switch to ${
                mounted && resolvedTheme === 'light' ? 'dark' : 'light'
              } mode`}
            >
              {mounted ? (resolvedTheme === 'dark' ? '🌞' : '🌙') : '🌙'}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${BUTTON_STYLES.themeButton} md:hidden`}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 px-2 pt-2 pb-3 sm:px-3 dark:border-gray-700">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? BUTTON_STYLES.navButtonActive
                      : BUTTON_STYLES.navButtonInactive
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
