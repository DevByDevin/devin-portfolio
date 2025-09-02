'use client';

import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';
import Globe3D from './ui/Globe3D';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  return (
    <>
      <section className="section h-screen">
        <div className="container-center">
          <div className="z-1 pt-10 text-center">
            <h1 className="h1">
              {t('greeting')}{' '}
              <span className="relative inline-block">
                <span className="animate-gradient-x animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent">
                  {t('name')}
                </span>
              </span>
            </h1>
            <p className="body-large">{t('title')}</p>
            <p className="description">{t('description')}</p>
          </div>
          <div className="z-1 mb-8">
            <Globe3D />
          </div>
          <div className="flex-center-col z-1">
            <a href="#projects" className="button-card">
              {t('viewWork')}
            </a>
            <a href="#contact" className="button-card">
              {t('getInTouch')}
            </a>
          </div>
        </div>
        <StarsBackground className="absolute inset-0 z-0 h-full w-full" />
      </section>
    </>
  );
}
