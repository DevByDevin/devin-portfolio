import StatCard from './StatCard';
import {
  ABOUT_SECTION,
  QUICK_FACTS,
  STAT_CARDS,
  WHO_I_AM_DESCRIPTION,
} from '../constants/about';

export default function About() {
  return (
    <section
      id='about'
      className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            {ABOUT_SECTION.title}
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            {ABOUT_SECTION.subtitle}
          </p>
        </div>

        <div className='flex gap-12 items-center'>
          <div className='h-full w-100 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm'>
            <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
              {ABOUT_SECTION.quickFactsTitle}
            </h4>
            <div className='flex flex-wrap gap-3'>
              {QUICK_FACTS.map((fact, index) => (
                <span
                  key={index}
                  className='px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-sm'
                >
                  {fact.text}
                </span>
              ))}
            </div>
          </div>
          <div className='h-full'>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
              {ABOUT_SECTION.whoIAmTitle}
            </h3>
            {WHO_I_AM_DESCRIPTION.map((paragraph, index) => (
              <p
                key={index}
                className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'
              >
                {paragraph}
              </p>
            ))}

            <div className='grid grid-cols-2 gap-6 mt-8'>
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
