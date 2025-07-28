import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollFadeIn from './ScrollFadeIn.jsx';

// Featured repositories to highlight (optional)
// Add your new repo name here to feature it at the top
const featuredRepos = [
  'sushant-portfolio',
  'DevOps-Projects', 
  'AWS-Infrastructure',
  'Kubernetes-Deployment',
  'CI-CD-Pipeline',
  'Terraform-Modules'
  // Add new repo names here: 'your-new-repo-name'
];

export default function Projects() {
  const [lightMode, setLightMode] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/sonbarse17/repos?sort=updated&per_page=50');
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const repos = await response.json();
      
      // Filter out forks and sort by featured repos first, then by updated date
      const filteredRepos = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => {
          const aFeatured = featuredRepos.includes(a.name);
          const bFeatured = featuredRepos.includes(b.name);
          if (aFeatured && !bFeatured) return -1;
          if (!aFeatured && bFeatured) return 1;
          return new Date(b.updated_at) - new Date(a.updated_at);
        })
        .slice(0, 6); // Show top 6 repositories
      
      const formattedProjects = filteredRepos.map(repo => ({
        title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        summary: repo.description || 'No description available',
        description: repo.description || 'No description available',
        technologies: repo.topics?.length > 0 ? repo.topics : ['Repository'],
        github: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        updated: new Date(repo.updated_at).toLocaleDateString()
      }));
      
      setProjects(formattedProjects);
      setLoading(false);
    } catch (err) {
      setError('Unable to load projects');
      setLoading(false);
    }
  };

  const getTechBadge = (tech) => {
    const techMap = {
      'jenkins': 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white',
      'docker': 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
      'kubernetes': 'https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white',
      'python': 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
      'aws': 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white',
      'terraform': 'https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white',
      'ansible': 'https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white',
      'prometheus': 'https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white',
      'grafana': 'https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white',
      'javascript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'typescript': 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      'react': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'nodejs': 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
      'html': 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      'css': 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'shell': 'https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white',
      'linux': 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black'
    };
    
    const key = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
    return techMap[key] || `https://img.shields.io/badge/${tech}-000000?style=for-the-badge`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <ScrollFadeIn>
      <section id="projects" className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-contrast">
            GitHub Projects
          </h2>
          <p className="text-lg text-slate-200 text-contrast">
            Latest repositories from my GitHub profile
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`border rounded-xl p-6 shadow-lg animate-pulse ${
                lightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'
              }`}>
                <div className={`h-32 rounded-lg mb-4 ${
                  lightMode ? 'bg-gray-200' : 'bg-gray-700'
                }`}></div>
                <div className={`h-6 rounded mb-3 ${
                  lightMode ? 'bg-gray-200' : 'bg-gray-700'
                }`}></div>
                <div className={`h-4 rounded mb-2 ${
                  lightMode ? 'bg-gray-200' : 'bg-gray-700'
                }`}></div>
                <div className={`h-4 rounded mb-4 w-3/4 ${
                  lightMode ? 'bg-gray-200' : 'bg-gray-700'
                }`}></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              lightMode ? 'text-gray-900' : 'text-white'
            }`}>
              {error}
            </h3>
            <p className={`text-sm ${
              lightMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Please try again later or check your internet connection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group relative border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 animate-slide-up overflow-hidden ${
                  lightMode 
                    ? 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500/50' 
                    : 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-blue-500/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className={`mb-6 rounded-lg overflow-hidden border transition-colors duration-300 relative ${
                    lightMode ? 'border-gray-200' : 'border-gray-700'
                  }`}>
                    <div className={`h-32 flex items-center justify-center transition-colors duration-300 relative overflow-hidden ${
                      lightMode ? 'bg-gradient-to-br from-blue-50 to-cyan-50' : 'bg-gradient-to-br from-slate-800 to-slate-700'
                    }`}>
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {project.language === 'JavaScript' ? '🟨' : 
                         project.language === 'Python' ? '🐍' :
                         project.language === 'TypeScript' ? '🔷' :
                         project.language === 'HTML' ? '🌐' :
                         project.language === 'CSS' ? '🎨' :
                         project.language === 'Shell' ? '💻' : '🚀'}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 ${
                      lightMode ? 'text-gray-900' : 'text-white'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={`text-sm font-medium mb-3 transition-colors duration-300 ${
                    lightMode ? 'text-blue-600' : 'text-cyan-400'
                  }`}>
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <img
                        key={tech}
                        src={getTechBadge(tech)}
                        alt={tech}
                        className="h-6 hover:scale-110 transition-transform duration-200"
                      />
                    ))}
                  </div>
                  
                  {/* Repository Stats */}
                  <div className={`flex items-center gap-4 mb-6 text-sm ${
                    lightMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      ⭐ {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      🍴 {project.forks}
                    </span>
                    {project.language && (
                      <span className="flex items-center gap-1">
                        💻 {project.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      📅 {project.updated}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 font-semibold rounded-xl text-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg ${
                        lightMode 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-500/25' 
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/25'
                      }`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>

                <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors duration-500 ${
                  lightMode ? 'bg-blue-200/20' : 'bg-blue-500/10'
                }`}></div>
                <div className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl group-hover:bg-purple-500/20 transition-colors duration-500 ${
                  lightMode ? 'bg-purple-200/20' : 'bg-purple-500/10'
                }`}></div>
              </div>
            ))}
          </div>
        )}
        </div>
      </section>
    </ScrollFadeIn>
  );
}