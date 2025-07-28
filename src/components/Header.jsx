import { useState, useEffect } from 'react';

export default function Header() {
  const [lightMode, setLightMode] = useState(false);
  const [trafficCount, setTrafficCount] = useState('-');

  useEffect(() => {
    const theme = localStorage.getItem('lightMode');
    setLightMode(theme === 'true');
    
    // Fetch traffic data
    const fetchTraffic = async () => {
      try {
        const response = await fetch('/sushant-portfolio/traffic.json?t=' + Date.now());
        if (response.ok) {
          const data = await response.json();
          const views = data.last_24h?.views || data.total_views || 0;
          setTrafficCount(views);
        }
      } catch (error) {
        setTrafficCount('N/A');
      }
    };
    
    fetchTraffic();
  }, []);

  const toggleTheme = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    localStorage.setItem('lightMode', newMode.toString());
    document.documentElement.classList.toggle('light', newMode);
  };

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b shadow-2xl transition-colors duration-300 ${
      lightMode ? 'bg-white/80 border-gray-200/50' : 'bg-black/80 border-gray-800/50'
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
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm text-gray-400">
            <span className="font-medium">Views:</span> 
            <span className="text-blue-400 font-bold ml-1">{trafficCount}</span>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="group relative p-2 sm:p-3 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 bg-gray-900/80 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20"
            aria-label="Toggle Theme"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-base sm:text-lg text-blue-400">
              {lightMode ? '🌙' : '☀️'}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}