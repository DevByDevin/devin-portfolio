import StatCard from './StatCard';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="h2">{t('title')}</h2>
          <p className="subtitle">{t('subtitle')}</p>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
          <div className="card-white">
            <h4 className="h4">{t('quickFactsTitle')}</h4>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <span className="skill-tag-alt">{t('quickFacts.fullStack')}</span>
              <span className="skill-tag-alt">{t('quickFacts.reactExpert')}</span>
              <span className="skill-tag-alt">{t('quickFacts.nodejs')}</span>
              <span className="skill-tag-alt">{t('quickFacts.uiux')}</span>
              <span className="skill-tag-alt">{t('quickFacts.database')}</span>
            </div>
          </div>
          <div className="w-full lg:h-full">
            <h3 className="h3">{t('whoIAmTitle')}</h3>
            {t.raw('description').map((paragraph: string, index: number) => (
              <p key={index} className="body">
                {paragraph}
              </p>
            ))}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:gap-6">
              <StatCard value="4+" label={t('stats.experience')} />
              <StatCard value="20+" label={t('stats.projects')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
