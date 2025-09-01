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
  ];

  return (
    <section id="projects" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-600 dark:bg-gray-700"
            >
              <div className="flex h-48 items-center justify-center bg-gray-200 dark:bg-gray-600">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Project Image Placeholder
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
