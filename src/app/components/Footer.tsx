export default function Footer() {
  return (
    <footer className="bg-gray-100 px-4 pb-12 text-white sm:px-6 lg:px-8 dark:bg-white/10">
      <div className="border-gray-800 pt-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">
            © 2025 Devin Han. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
