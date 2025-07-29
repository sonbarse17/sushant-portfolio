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
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Home</a>
          <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">About</a>
          <a href="#experience" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Experience</a>
          <a href="#projects" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Projects</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Contact</a>
        </nav>
      </nav>
    </header>
  );
}