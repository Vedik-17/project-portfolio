import { Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart size={18} className="text-red-500 fill-red-500" />
            <span>by Mendu Vedik Reddy</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Vedik-17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
