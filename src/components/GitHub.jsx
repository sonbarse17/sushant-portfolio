import { useState, useEffect } from 'react';

export default function GitHub() {
  const [lightMode, setLightMode] = useState(false);
  const [githubData, setGithubData] = useState({
    repos: '-',
    followers: '-',
    following: '-'
  });
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      const userResponse = await fetch('https://api.github.com/users/sonbarse17');
      const userData = await userResponse.json();
      
      setGithubData({
        repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following
      });
      
      const reposResponse = await fetch('https://api.github.com/users/sonbarse17/repos?sort=updated&per_page=6');
      const reposData = await reposResponse.json();
      
      const filteredRepos = reposData.filter(repo => !repo.fork).slice(0, 6);
      setRepositories(filteredRepos);
      setLoading(false);
      
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      setGithubData({ repos: 'Error', followers: 'Error', following: 'Error' });
      setLoading(false);
    }
  };

  return (
    <section id="github" className={`py-20 transition-colors duration-300 ${
      lightMode ? 'bg-white' : 'bg-black'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            lightMode ? 'text-gray-900' : 'text-white'
          }`}>
            GitHub Profile
          </h2>
          <p className={`text-lg transition-colors duration-300 ${
            lightMode ? 'text-gray-600' : 'text-gray-300'
          }`}>
            My open source contributions and repositories
          </p>
        </div>
        
        {/* GitHub Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className={`border rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 ${
            lightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'
          }`}>
            <h3 className="text-3xl font-bold text-blue-400 mb-2">{githubData.repos}</h3>
            <p className={`transition-colors duration-300 ${
              lightMode ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Repositories
            </p>
          </div>
          <div className={`border rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 ${
            lightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'
          }`}>
            <h3 className="text-3xl font-bold text-blue-400 mb-2">{githubData.followers}</h3>
            <p className={`transition-colors duration-300 ${
              lightMode ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Followers
            </p>
          </div>
          <div className={`border rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 ${
            lightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'
          }`}>
            <h3 className="text-3xl font-bold text-blue-400 mb-2">{githubData.following}</h3>
            <p className={`transition-colors duration-300 ${
              lightMode ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Following
            </p>
          </div>
        </div>
        
        {/* GitHub README */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className={`border rounded-xl p-8 shadow-lg transition-colors duration-300 ${
            lightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${
              lightMode ? 'text-gray-900' : 'text-white'
            }`}>
              📋 GitHub Profile README
            </h3>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-blue-400 mb-4">
                Hey Everyone 👋, I'm Sushant Sonbarse
              </h1>
              <h3 className={`text-xl mb-6 ${lightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                A passionate DevOps Engineer from India. I work in the Corporate IT Sector
              </h3>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/followers/sonbarse17?label=Follow&style=social" alt="GitHub Followers" />
                </a>
                <a href="https://linkedin.com/in/sushant-sonbarse" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/LinkedIn-Sushant%20Sonbarse-blue?logo=linkedin&style=flat-square" alt="LinkedIn" />
                </a>
              </div>
              
              <img 
                src="https://komarev.com/ghpvc/?username=sonbarse17&label=Profile%20views&color=0e75b6&style=flat" 
                alt="Profile Views" 
                className="mx-auto"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <ul className={`space-y-2 ${lightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                  <li>👨‍💻 All of my projects are available at <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a></li>
                  <li>💬 Ask me about <strong>DevOps & Cloud DevOps</strong></li>
                  <li>📫 How to reach me <strong>sushantsonbarse07@gmail.com</strong></li>
                </ul>
              </div>
              <div className="text-center">
                <img 
                  src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif" 
                  alt="Coding Animation" 
                  className="w-full max-w-sm mx-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=sonbarse17&show_icons=true&locale=en&layout=compact&theme=vue&hide_border=true" 
                  alt="Top Languages" 
                  className="mx-auto rounded-lg"
                />
              </div>
              <div className="text-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=sonbarse17&show_icons=true&locale=en&theme=vue&hide_border=true" 
                  alt="GitHub Stats" 
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className={`text-xl font-semibold mb-4 ${lightMode ? 'text-gray-900' : 'text-white'}`}>
                👨‍💼 About Me & 🤝 Open to Collaborations
              </h3>
              <p className={`mb-4 ${lightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                🤝 Open to <strong>Project Collaborations</strong><br/>
                💼 Offering <strong>DevOps Consulting / Mentorship</strong><br/>
                📧 Let's chat: <a href="mailto:sushantsonbarse07@gmail.com" className="text-blue-400 hover:underline">sushantsonbarse07@gmail.com</a>
              </p>
              
              <blockquote className={`text-lg border-l-4 border-blue-400 pl-4 italic p-4 rounded-r-lg ${
                lightMode ? 'text-gray-700 bg-gray-100' : 'text-gray-400 bg-gray-800'
              }`}>
                "Helping people crack DevOps with real-world knowledge. Let's build and automate the future, one pipeline at a time!"
              </blockquote>
            </div>
          </div>
        </div>
        
        {/* Featured Repositories */}
        <div className="max-w-6xl mx-auto">
          <h3 className={`text-2xl font-bold mb-8 text-center transition-colors duration-300 ${
            lightMode ? 'text-gray-900' : 'text-white'
          }`}>
            📌 Featured Repositories
          </h3>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`border rounded-xl p-6 shadow-lg animate-pulse ${
                  lightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'
                }`}>
                  <div className={`h-4 rounded mb-4 ${lightMode ? 'bg-gray-200' : 'bg-gray-600'}`}></div>
                  <div className={`h-3 rounded mb-2 ${lightMode ? 'bg-gray-200' : 'bg-gray-600'}`}></div>
                  <div className={`h-3 rounded mb-4 ${lightMode ? 'bg-gray-200' : 'bg-gray-600'}`}></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories.map((repo) => (
                <div key={repo.id} className={`border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  lightMode ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-800'
                }`}>
                  <h5 className={`text-lg font-semibold mb-3 ${lightMode ? 'text-gray-900' : 'text-white'}`}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      {repo.name}
                    </a>
                  </h5>
                  <p className={`mb-4 text-sm leading-relaxed ${lightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                    {repo.description || 'No description available'}
                  </p>
                  <div className={`flex flex-wrap gap-3 text-sm ${lightMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
                    {repo.language && <span className="flex items-center gap-1">💻 {repo.language}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}