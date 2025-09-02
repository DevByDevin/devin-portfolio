'use client';

import { useLanguage } from '../../hooks/useLanguage';

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    changeLanguage(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 rounded-lg border-2 border-blue-500 bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700"
      style={{ position: 'fixed' }}
    >
      {locale === 'en' ? '中文' : 'English'}
    </button>
  );
}
