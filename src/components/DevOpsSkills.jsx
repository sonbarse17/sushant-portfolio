import { useState } from 'react';

export default function DevOpsSkills() {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const skillCategories = {
    devops: {
      title: 'DevOps Tools',
      icon: '🔧',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Jenkins', level: 90, icon: '🔧', projects: '25+ pipelines' },
        { name: 'GitLab CI', level: 85, icon: '🦊', projects: '15+ pipelines' },
        { name: 'GitHub Actions', level: 88, icon: '🐙', projects: '20+ workflows' },
        { name: 'Ansible', level: 82, icon: '🔴', projects: '12+ playbooks' }
      ]
    },
    cloud: {
      title: 'Cloud Platforms',
      icon: '☁️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 92, icon: '🟠', projects: '18+ projects' },
        { name: 'Azure', level: 78, icon: '🔵', projects: '10+ projects' },
        { name: 'GCP', level: 72, icon: '🟡', projects: '6+ projects' }
      ]
    },
    containers: {
      title: 'Containerization',
      icon: '🐳',
      color: 'from-blue-600 to-purple-600',
      skills: [
        { name: 'Docker', level: 95, icon: '🐳', projects: '20+ projects' },
        { name: 'Kubernetes', level: 85, icon: '☸️', projects: '12+ projects' },
        { name: 'Helm', level: 80, icon: '⚓', projects: '10+ projects' }
      ]
    },
    monitoring: {
      title: 'Monitoring & Observability',
      icon: '📊',
      color: 'from-green-500 to-blue-500',
      skills: [
        { name: 'Prometheus', level: 88, icon: '🔥', projects: '12+ dashboards' },
        { name: 'Grafana', level: 92, icon: '📈', projects: '18+ dashboards' },
        { name: 'ELK Stack', level: 85, icon: '🔍', projects: '10+ implementations' },
        { name: 'Datadog', level: 80, icon: '🐕', projects: '8+ setups' }
      ]
    },
    os: {
      title: 'OS & Others',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Linux', level: 95, icon: '🐧', projects: 'Daily use' },
        { name: 'Bash', level: 90, icon: '💻', projects: '100+ scripts' },
        { name: 'Python', level: 85, icon: '🐍', projects: '20+ automations' },
        { name: 'Git', level: 92, icon: '📝', projects: 'Version control' }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            DevOps <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg">Technologies I use to build and scale infrastructure</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{skillCategories[activeCategory].icon}</div>
              <h3 className="text-2xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="text-white font-semibold">{skill.name}</h4>
                    </div>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-gray-400 text-sm">{skill.projects}</div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}