export default function About() {
  return (
    <section
      id='about'
      className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            About Me
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Get to know me better
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
              Who I Am
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
              I'm a passionate full-stack developer with a love for creating
              innovative solutions. With expertise in modern web technologies, I
              enjoy turning complex problems into simple, beautiful, and
              intuitive designs.
            </p>
            <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className='grid grid-cols-2 gap-6 mt-8'>
              <div className='text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm'>
                <div className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                  3+
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-300'>
                  Years Experience
                </div>
              </div>
              <div className='text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm'>
                <div className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                  20+
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-300'>
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm'>
            <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
              Quick Facts
            </h4>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <span className='w-3 h-3 bg-blue-600 rounded-full mr-3'></span>
                <span className='text-gray-600 dark:text-gray-300'>
                  Full-Stack Development
                </span>
              </div>
              <div className='flex items-center'>
                <span className='w-3 h-3 bg-blue-600 rounded-full mr-3'></span>
                <span className='text-gray-600 dark:text-gray-300'>
                  React & Next.js Expert
                </span>
              </div>
              <div className='flex items-center'>
                <span className='w-3 h-3 bg-blue-600 rounded-full mr-3'></span>
                <span className='text-gray-600 dark:text-gray-300'>
                  Node.js & TypeScript
                </span>
              </div>
              <div className='flex items-center'>
                <span className='w-3 h-3 bg-blue-600 rounded-full mr-3'></span>
                <span className='text-gray-600 dark:text-gray-300'>
                  UI/UX Design
                </span>
              </div>
              <div className='flex items-center'>
                <span className='w-3 h-3 bg-blue-600 rounded-full mr-3'></span>
                <span className='text-gray-600 dark:text-gray-300'>
                  Database Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
