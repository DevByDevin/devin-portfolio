export default function Footer() {
  return (
    <footer className='bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div className='md:col-span-2'>
            <h3 className='text-2xl font-bold mb-4'>Devin Han</h3>
            <p className='text-gray-400 mb-6 max-w-md'>
              Full-stack developer passionate about creating innovative web
              solutions and delivering exceptional user experiences.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='text-xl'>🐙</span>
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='text-xl'>💼</span>
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='text-xl'>🐦</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#skills'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>devin@example.com</li>
              <li>San Francisco, CA</li>
              <li>Available for opportunities</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm mb-4 md:mb-0'>
              © 2024 Devin Han. All rights reserved.
            </p>
            <div className='flex space-x-6 text-sm text-gray-400'>
              <a href='#' className='hover:text-white transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
