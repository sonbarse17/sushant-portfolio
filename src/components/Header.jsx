import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${
      'bg-black/80 border-gray-800/50'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}