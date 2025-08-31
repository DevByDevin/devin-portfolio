export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description:
        'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'OpenWeatherMap API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Blog Platform',
      description:
        'A content management system for blogs with markdown support, SEO optimization, and analytics dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Chat Application',
      description:
        'Real-time chat application with user authentication, file sharing, and group chat functionality.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Socket.io', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section
      id='projects'
      className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Featured Projects
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Some of my recent work and personal projects
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-shadow duration-300'
            >
              <div className='h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center'>
                <span className='text-gray-500 dark:text-gray-400 text-sm'>
                  Project Image Placeholder
                </span>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a
                    href={project.liveUrl}
                    className='flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200'
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className='flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href='#'
            className='inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200'
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
