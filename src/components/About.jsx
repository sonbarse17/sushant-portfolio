import { useState, useEffect } from 'react';

export default function About() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
  }, []);

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
      lightMode ? 'bg-gray-50' : 'bg-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-8 transition-colors duration-300 ${
              lightMode ? 'text-gray-900' : 'text-white'
            }`}>
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className={`text-lg sm:text-xl mb-6 leading-relaxed transition-colors duration-300 ${
                lightMode ? 'text-gray-700' : 'text-gray-300'
              }`}>
                DevOps Engineer specializing in cloud infrastructure, automation, and CI/CD pipelines. 
                Skilled in AWS services, containerization with Docker and Kubernetes, and Infrastructure as Code using Terraform. 
                Passionate about optimizing deployment processes and building reliable, scalable systems.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className={`text-center p-6 rounded-xl border transition-colors duration-300 ${
                  lightMode ? 'bg-white border-gray-200 shadow-lg' : 'bg-gray-800 border-gray-700'
                }`}>
                  <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    lightMode ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    Years Experience
                  </div>
                </div>
                <div className={`text-center p-6 rounded-xl border transition-colors duration-300 ${
                  lightMode ? 'bg-white border-gray-200 shadow-lg' : 'bg-gray-800 border-gray-700'
                }`}>
                  <div className="text-3xl font-bold text-green-500 mb-2">15+</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    lightMode ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    Technologies
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src="/sushant-portfolio/images/banner.png" 
                  alt="Developer" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}