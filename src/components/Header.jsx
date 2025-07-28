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
        
        <div className="hidden sm:block text-sm text-gray-400">
          <span className="font-medium">Views:</span> 
          <span className="text-blue-400 font-bold ml-1">{trafficCount}</span>
        </div>
      </nav>
    </header>
  );
}