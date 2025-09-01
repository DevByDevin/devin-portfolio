export default function Hero() {
  return (
    <section className='pt-24 pb-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto text-center'>
        <div className='mb-8'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
            Hi, I&apos;m{' '}
            <span className='relative inline-block'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient-x bg-clip-text text-transparent animate-pulse'>
                Devin Han
              </span>
            </span>
          </h1>
          <p className='text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            Full-Stack Developer & Creative Problem Solver
          </p>
          <p className='text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto'>
            I build modern web applications with cutting-edge technologies.
            Passionate about creating user experiences that matter.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='#projects'
            className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200'
          >
            View My Work
          </a>
          <a
            href='#contact'
            className='inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
