import { useState, useEffect } from 'react';
import ScrollFadeIn from './ScrollFadeIn.jsx';

export default function Experience() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
  }, []);

  const experiences = [
    {
      title: "DevOps Intern",
      company: "HisanLabs",
      period: "2024 - Present",
      achievements: [
        "Situation: Legacy deployment process taking 4+ hours with manual interventions",
        "Task: Implement automated CI/CD pipeline to reduce deployment time and errors",
        "Action: Built Jenkins pipeline with Docker containerization and Kubernetes deployment",
        "Result: Reduced deployment time by 85% (4 hours → 45 minutes) and eliminated manual errors"
      ]
    }
  ];

  return (
    <ScrollFadeIn>
      <section id="experience" className="py-20 bg-transparent relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-contrast">
              Professional Experience
            </h2>
            <p className="text-lg text-slate-200 text-contrast">
              Building scalable infrastructure and automation solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-yellow-400"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                  
                  {/* Content card */}
                  <div className="ml-16 w-full">
                    <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-blue-300 font-semibold text-lg">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-300 font-medium text-sm mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Achievement (STAR Format):</h4>
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Tech stack used */}
                      <div className="mt-6 pt-6 border-t border-slate-700/50">
                        <h5 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Linux'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-800/50 border border-slate-600/50 rounded-full text-xs text-slate-300 hover:border-blue-400/50 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}