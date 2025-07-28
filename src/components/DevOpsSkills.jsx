import { useState } from 'react';

export default function DevOpsSkills() {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const skillCategories = {
    cloud: {
      title: 'Cloud Platforms',
      icon: '☁️',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'AWS', level: 90, icon: '🟠', projects: '15+ projects' },
        { name: 'Azure', level: 75, icon: '🔵', projects: '8+ projects' },
        { name: 'GCP', level: 70, icon: '🟡', projects: '5+ projects' }
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
    cicd: {
      title: 'CI/CD Tools',
      icon: '🚀',
      color: 'from-green-500 to-blue-500',
      skills: [
        { name: 'Jenkins', level: 90, icon: '🔧', projects: '25+ pipelines' },
        { name: 'GitLab CI', level: 85, icon: '🦊', projects: '15+ pipelines' },
        { name: 'GitHub Actions', level: 80, icon: '🐙', projects: '20+ workflows' }
      ]
    },
    iac: {
      title: 'Infrastructure as Code',
      icon: '🏗️',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Terraform', level: 90, icon: '🟣', projects: '18+ modules' },
        { name: 'Ansible', level: 85, icon: '🔴', projects: '12+ playbooks' },
        { name: 'CloudFormation', level: 75, icon: '🟠', projects: '8+ stacks' }
      ]
    },
    monitoring: {
      title: 'Monitoring & Observability',
      icon: '📊',
      color: 'from-yellow-500 to-red-500',
      skills: [
        { name: 'Prometheus', level: 85, icon: '🔥', projects: '10+ dashboards' },
        { name: 'Grafana', level: 90, icon: '📈', projects: '15+ dashboards' },
        { name: 'ELK Stack', level: 80, icon: '🔍', projects: '8+ implementations' }
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

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-lg p-6">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="text-white font-semibold mb-2">AWS Certified</h4>
                <p className="text-gray-300 text-sm">Solutions Architect Professional</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-white font-semibold mb-2">Kubernetes Expert</h4>
                <p className="text-gray-300 text-sm">CKA & CKAD Certified</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-lg p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-white font-semibold mb-2">DevOps Leader</h4>
                <p className="text-gray-300 text-sm">3+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}