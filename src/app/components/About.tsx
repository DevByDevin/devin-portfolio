import StatCard from './StatCard';
import { ABOUT_SECTION, QUICK_FACTS, STAT_CARDS, WHO_I_AM_DESCRIPTION } from '../constants/about';
import { LAYOUT_STYLES, TYPOGRAPHY_STYLES, CARD_STYLES, TAG_STYLES } from '../constants/styles';

export default function About() {
  return (
    <section id="about" className={LAYOUT_STYLES.sectionAlt}>
      <div className={LAYOUT_STYLES.container}>
        <div className={`${TYPOGRAPHY_STYLES.textCenter} ${LAYOUT_STYLES.mb16}`}>
          <h2 className={TYPOGRAPHY_STYLES.h2}>{ABOUT_SECTION.title}</h2>
          <p className={TYPOGRAPHY_STYLES.subtitle}>{ABOUT_SECTION.subtitle}</p>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
          <div className={CARD_STYLES.cardWhite}>
            <h4 className={TYPOGRAPHY_STYLES.h4}>{ABOUT_SECTION.quickFactsTitle}</h4>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {QUICK_FACTS.map((fact, index) => (
                <span key={index} className={TAG_STYLES.skillTagAlt}>
                  {fact.text}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:h-full">
            <h3 className={TYPOGRAPHY_STYLES.h3}>{ABOUT_SECTION.whoIAmTitle}</h3>
            {WHO_I_AM_DESCRIPTION.map((paragraph, index) => (
              <p key={index} className={TYPOGRAPHY_STYLES.body}>
                {paragraph}
              </p>
            ))}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:gap-6">
              {STAT_CARDS.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
