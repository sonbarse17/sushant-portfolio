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
                <p className="text-lg leading-relaxed mb-4 text-white text-contrast">
                  <span className="font-semibold text-blue-300">DevOps Engineer</span> with 1+ years of experience in designing, implementing, and maintaining scalable cloud infrastructure. 
                  Expert in automating deployment pipelines, container orchestration, and infrastructure as code.
                </p>
                <p className="text-lg leading-relaxed text-slate-200 text-contrast">
                  Proven track record of reducing deployment times by 85% and achieving 99.9% uptime through robust monitoring and automation strategies.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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