import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('lightMode');
    setLightMode(theme === 'true');
  }, []);

  const toggleTheme = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    localStorage.setItem('lightMode', newMode.toString());
    document.documentElement.classList.toggle('light', newMode);
  };

  return (
    <button 
      onClick={toggleTheme}
      className={`group relative p-2 sm:p-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 shadow-lg ${
        lightMode 
          ? 'bg-gradient-to-r from-gray-100/80 to-gray-200/80 border-gray-300/50 hover:border-blue-500/50 hover:shadow-blue-500/20' 
          : 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/20'
      }`}
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className={`relative text-base sm:text-lg ${lightMode ? 'text-purple-600' : 'text-blue-400'}`}>
        {lightMode ? '🌙' : '☀️'}
      </span>
    </button>
  );
}