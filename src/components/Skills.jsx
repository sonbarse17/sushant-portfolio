import { useState, useEffect } from 'react';

const skills = [
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS", icon: "/sushant-portfolio/icons/aws.png" },
      { name: "Azure", icon: "/sushant-portfolio/icons/azure.png" },
      { name: "GCP", icon: "/sushant-portfolio/icons/gcp.png" },
      { name: "Terraform", icon: "/sushant-portfolio/icons/terraform.png" },
      { name: "Kubernetes", icon: "/sushant-portfolio/icons/kubernetes.png" }
    ],
    icon: "☁️"
  },
  {
    category: "DevOps Tools",
    items: [
      { name: "Jenkins", icon: "/sushant-portfolio/icons/jenkins.png" },
      { name: "GitLab CI", icon: "/sushant-portfolio/icons/gitlab.svg" },
      { name: "GitHub Actions", icon: "/sushant-portfolio/icons/github.svg" },
      { name: "Ansible", icon: "/sushant-portfolio/icons/ansible.png" },
      { name: "Maven", icon: "/sushant-portfolio/icons/maven.png" }
    ],
    icon: "🔧"
  },
  {
    category: "Containerization",
    items: [
      { name: "Docker", icon: "/sushant-portfolio/icons/docker.png" },
      { name: "Helm", icon: "/sushant-portfolio/icons/helm.png" }
    ],
    icon: "📦"
  },
  {
    category: "Monitoring",
    items: [
      { name: "Prometheus", icon: "/sushant-portfolio/icons/prometheus.png" },
      { name: "Grafana", icon: "/sushant-portfolio/icons/grafana.png" },
      { name: "Datadog", icon: "/sushant-portfolio/icons/datadog.png" },
      { name: "EFK Stack", icon: "📊" }
    ],
    icon: "📊"
  },
  {
    category: "Scripting",
    items: [
      { name: "Bash", icon: "/sushant-portfolio/icons/bash.png" },
      { name: "Python", icon: "/sushant-portfolio/icons/python.svg" }
    ],
    icon: "💻"
  },
  {
    category: "Other",
    items: [
      { name: "Linux", icon: "/sushant-portfolio/icons/linux.gif" },
      { name: "Git", icon: "/sushant-portfolio/icons/git.svg" }
    ],
    icon: "⚙️"
  }
];

export default function Skills() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
  }, []);

  return (
    <section 
      id="skills" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        lightMode 
          ? 'bg-gradient-to-b from-gray-50 via-white to-gray-50' 
          : 'bg-gradient-to-b from-gray-900 via-black to-gray-900'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
            lightMode ? 'text-gray-900' : 'text-white'
          }`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg transition-colors duration-300 ${
            lightMode ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Technologies I work with to build scalable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className={`group relative backdrop-blur-sm border rounded-xl p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 animate-slide-up overflow-hidden ${
                lightMode 
                  ? 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/50 hover:border-blue-500/30' 
                  : 'bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-800/50 hover:border-blue-500/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300 ${
                  lightMode ? 'text-gray-900' : 'text-white'
                }`}>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item.name}
                      className={`backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 border hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 min-h-[32px] ${
                        lightMode 
                          ? 'bg-gray-100/80 text-blue-600 border-gray-300/50' 
                          : 'bg-gray-800/80 text-blue-300 border-gray-700/50'
                      }`}
                    >
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-4 h-4">
                        {(item.icon.endsWith('.svg') || item.icon.endsWith('.png') || item.icon.endsWith('.gif')) ? (
                          <img src={item.icon} alt={item.name} className="object-contain w-4 h-4" />
                        ) : (
                          <span className="text-sm leading-none">{item.icon}</span>
                        )}
                      </div>
                      <span className="whitespace-nowrap">{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}