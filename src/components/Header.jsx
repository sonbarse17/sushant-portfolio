import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Experience</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</a>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-center space-x-4 py-2">
              <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${'bg-black/80 border-gray-800/50'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-blue-400">
              Sushant Sonbarse
            </h1>
            <div className="text-xs text-gray-400 font-mono">DevOps Engineer</div>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedInIcon />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button