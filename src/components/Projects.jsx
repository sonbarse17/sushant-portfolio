import { useState, useEffect } from 'react';


const featuredRepos = [
  'sushant-portfolio',
  'DevOps-Projects',
  'AWS-Infrastructure',
  'Kubernetes-Deployment',
  'CI-CD-Pipeline',
  'Terraform-Modules'
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/sonbarse17/repos?sort=updated&per_page=50');
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const repos = await response.json();
      
      const filteredRepos = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => {
          const aFeatured = featuredRepos.includes(a.name);
          const bFeatured = featuredRepos.includes(b.name);
          if (aFeatured && !bFeatured) return -1;
          if (!aFeatured && bFeatured) return 1;
          return new Date(b.updated_at) - new Date(a.updated_at);
        })
        .slice(0, 6);
      
      const formattedProjects = filteredRepos.map(repo => ({
        title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: repo.description || 'No description available.',
        technologies: repo.topics?.length > 0 ? repo.topics : ['GitHub'],
        github: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
      }));
      
      setProjects(formattedProjects);
      setLoading(false);
    } catch (err) {
      setError('Unable to load projects from GitHub.');
      setLoading(false);
    }
  };

  return (
    
      <section id="projects" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              My Projects
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A selection of my recent work and personal projects.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-lg p-6 animate-pulse">
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-400 bg-red-900/50 p-6 rounded-lg">
              <p className="text-xl font-semibold">Error</p>
              <p>{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a href={project.github} key={index} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 text-xs font-semibold text-gray-300 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{project.language}</span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.35 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.96z"></path></svg>
                      <span>{project.stars}</span>
                      <svg className="w-4 h-4 ml-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 3.636a1 1 0 011.414 0L10 7.172l3.536-3.536a1 1 0 111.414 1.414L11.414 8.586l3.536 3.536a1 1 0 11-1.414 1.414L10 10.414l-3.536 3.536a1 1 0 01-1.414-1.414L8.586 8.586 5.05 5.05a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    
  );
}