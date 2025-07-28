import { useState, useEffect } from 'react';

export default function Hero() {
  const [lightMode, setLightMode] = useState(false);
  const [typingText, setTypingText] = useState('DevOps Engineer');
  
  const roles = ['DevOps Engineer', 'Platform Engineer', 'Site Reliability Engineer', 'Cloud Engineer'];

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
  }, []);

  useEffect(() => {
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentText = roles[currentRole];

      if (!isDeleting) {
        setTypingText(currentText.substring(0, currentChar + 1));
        currentChar++;

        if (currentChar === currentText.length) {
          setTimeout(() => isDeleting = true, 2000);
        }
      } else {
        setTypingText(currentText.substring(0, currentChar - 1));
        currentChar--;

        if (currentChar === 0) {
          isDeleting = false;
          currentRole = (currentRole + 1) % roles.length;
        }
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(typeWriter, speed);
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      lightMode ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-gradient-to-br from-black via-gray-900 to-black'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-4 -left-4 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          lightMode ? 'bg-blue-300/30' : 'bg-blue-500/20'
        }`}></div>
        <div className={`absolute top-1/2 -right-4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          lightMode ? 'bg-purple-300/30' : 'bg-purple-500/20'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute -bottom-8 left-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse ${
          lightMode ? 'bg-indigo-300/30' : 'bg-indigo-500/20'
        }`} style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className={`w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 hover:scale-105 ${
                lightMode ? 'border-blue-300 shadow-blue-200/50' : 'border-blue-500/50 shadow-blue-500/30'
              }`}>
                <img 
                  src="/sushant-portfolio/images/Snapchat-1800569552-01-removebg-preview.png" 
                  alt="Sushant Sonbarse - DevOps Engineer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Status indicator */}
              <div className={`absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 animate-pulse ${
                lightMode ? 'border-white' : 'border-gray-900'
              }`}></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className={`block transition-colors duration-300 ${
              lightMode ? 'text-gray-900' : 'text-white'
            }`}>
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Sushant Sonbarse
            </span>
          </h1>

          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light transition-colors duration-300 ${
            lightMode ? 'text-gray-700' : 'text-gray-300'
          }`}>
            <span className={`font-semibold transition-colors duration-300 ${
              lightMode ? 'text-blue-600' : 'text-blue-400'
            }`}>
              {typingText}
            </span>
          </h2>

          <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 transition-colors duration-300 ${
            lightMode ? 'text-gray-600' : 'text-gray-300'
          }`}>
            DevOps Engineer with expertise in cloud infrastructure, automation, and CI/CD pipelines. 
            Experienced in AWS, Kubernetes, Docker, and Infrastructure as Code with a passion for building scalable, reliable systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a 
              href="/sushant-portfolio/sushant_sonbarse_resume.pdf" 
              download
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-tighter text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </span>
            </a>
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-tighter text-blue-400 border-2 border-blue-400/50 rounded-full hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-blue-400/5 hover:bg-blue-400/10 hover:border-blue-400"
            >
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Contact Me
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}