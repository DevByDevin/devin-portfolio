import Globe3D from './ui/Globe3D';

export default function Hero() {
  return (
    <section className="h-screen px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I&apos;m{' '}
            <span className="relative inline-block">
              <span className="animate-gradient-x animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent">
                Devin Han
              </span>
            </span>
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-600 sm:text-2xl dark:text-gray-300">
            Global Full-Stack Developer & Digital Nomad
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            From China to the US, I've built my career across continents. Ready to work globally and
            bring innovative solutions to teams worldwide.
          </p>
        </div>
        <Globe3D />
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
