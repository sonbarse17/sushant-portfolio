import { useState, useEffect } from 'react';
import ScrollFadeIn from './ScrollFadeIn.jsx';

export default function About() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
  }, []);

  return (
    <ScrollFadeIn>
      <section id="about" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-contrast">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white text-contrast">
                  Professional Summary
                </h3>
                <p className="text-lg leading-relaxed mb-6 text-white text-contrast">
                  <span className="font-semibold text-blue-300">DevOps Engineer</span> specializing in <span className="text-yellow-300">Kubernetes</span>, <span className="text-blue-300">AWS</span>, <span className="text-cyan-300">Terraform</span>, <span className="text-green-300">CI/CD</span>, and <span className="text-purple-300">Monitoring</span> solutions.
                </p>
                
                {/* Skill Icons */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-6">
                  {[
                    { name: 'Kubernetes', icon: '☸️' },
                    { name: 'Docker', icon: '🐳' },
                    { name: 'AWS', icon: '☁️' },
                    { name: 'Terraform', icon: '🏗️' },
                    { name: 'Linux', icon: '🐧' },
                    { name: 'Jenkins', icon: '🔧' },
                    { name: 'Prometheus', icon: '📊' },
                    { name: 'Grafana', icon: '📈' }
                  ].map((skill, index) => (
                    <div key={skill.name} className="flex flex-col items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                      <span className="text-2xl mb-1">{skill.icon}</span>
                      <span className="text-xs text-slate-300 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`text-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  lightMode ? 'bg-white border-gray-200 shadow-md hover:shadow-blue-100' : 'bg-slate-800 border-slate-700 hover:shadow-blue-500/10'
                }`}>
                  <div className="text-2xl font-bold text-blue-500 mb-1">1+</div>
                  <div className={`text-xs font-medium ${
                    lightMode ? 'text-gray-600' : 'text-slate-400'
                  }`}>
                    Years Experience
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  lightMode ? 'bg-white border-gray-200 shadow-md hover:shadow-green-100' : 'bg-slate-800 border-slate-700 hover:shadow-green-500/10'
                }`}>
                  <div className="text-2xl font-bold text-green-500 mb-1">50+</div>
                  <div className={`text-xs font-medium ${
                    lightMode ? 'text-gray-600' : 'text-slate-400'
                  }`}>
                    Deployments
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  lightMode ? 'bg-white border-gray-200 shadow-md hover:shadow-cyan-100' : 'bg-slate-800 border-slate-700 hover:shadow-cyan-500/10'
                }`}>
                  <div className="text-2xl font-bold text-cyan-500 mb-1">99.9%</div>
                  <div className={`text-xs font-medium ${
                    lightMode ? 'text-gray-600' : 'text-slate-400'
                  }`}>
                    Uptime
                  </div>
                </div>
                <div className={`text-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  lightMode ? 'bg-white border-gray-200 shadow-md hover:shadow-purple-100' : 'bg-slate-800 border-slate-700 hover:shadow-purple-500/10'
                }`}>
                  <div className="text-2xl font-bold text-purple-500 mb-1">15+</div>
                  <div className={`text-xs font-medium ${
                    lightMode ? 'text-gray-600' : 'text-slate-400'
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
    </ScrollFadeIn>
  );
}