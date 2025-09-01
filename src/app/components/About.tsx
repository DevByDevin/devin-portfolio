import StatCard from './StatCard';
import { ABOUT_SECTION, QUICK_FACTS, STAT_CARDS, WHO_I_AM_DESCRIPTION } from '../constants/about';

export default function About() {
  return (
    <section id="about" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {ABOUT_SECTION.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {ABOUT_SECTION.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
          <div className="w-full rounded-lg bg-white p-6 shadow-sm lg:w-100 lg:p-8 dark:bg-gray-700">
            <h4 className="mb-4 text-lg font-semibold text-gray-900 lg:mb-6 lg:text-xl dark:text-white">
              {ABOUT_SECTION.quickFactsTitle}
            </h4>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {QUICK_FACTS.map((fact, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm lg:px-4 lg:py-2 lg:text-sm"
                >
                  {fact.text}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:h-full">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 lg:mb-6 lg:text-2xl dark:text-white">
              {ABOUT_SECTION.whoIAmTitle}
            </h3>
            {WHO_I_AM_DESCRIPTION.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-sm leading-relaxed text-gray-600 lg:mb-6 lg:text-base dark:text-gray-300"
              >
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
