export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 55 },
        { name: 'Figma', level: 70 },
        { name: 'Agile', level: 80 },
      ],
    },
  ];

  return (
    <section id='skills' className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Skills & Technologies
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            My technical expertise and tools I use
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'
            >
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center'>
                {category.title}
              </h3>
              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                        {skill.name}
                      </span>
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                      <div
                        className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-8'>
            Currently Learning
          </h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {[
              'Rust',
              'Web3',
              'Machine Learning',
              'GraphQL',
              'Microservices',
            ].map((skill, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
