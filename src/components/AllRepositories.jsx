import { useState, useEffect } from 'react';

export default function AllRepositories() {
  const [lightMode, setLightMode] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
    fetchAllRepos();
  }, []);

  const fetchAllRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/sonbarse17/repos?per_page=100&sort=updated');
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const repos = await response.json();
      const filteredRepos = repos.filter(repo => !repo.fork);
      setRepositories(filteredRepos);
      setLoading(false);
    } catch (err) {
      setError('Unable to load repositories');
      setLoading(false);
    }
  };

  const filteredRepositories = repositories.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLanguage = !languageFilter || repo.language === languageFilter;
    return matchesSearch && matchesLanguage;
  });

  const languages = [...new Set(repositories.map(repo => repo.language).filter(Boolean))];

  const getLanguageIcon = (language) => {
    const icons = {
      'JavaScript': '🟨',
      'Python': '🐍',
      'TypeScript': '🔷',
      'HTML': '🌐',
      'CSS': '🎨',
      'Shell': '💻',
      'Dockerfile': '🐳',
      'Go': '🐹',
      'Java': '☕',
      'C++': '⚡'
    };
    return icons[language] || '📄';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      lightMode ? 'bg-gray-50' : 'bg-slate-900'
    }`}>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            lightMode ? 'text-gray-900' : 'text-white'
          }`}>
            All Repositories
          </h1>
          <p className={`text-lg ${
            lightMode ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Complete collection of my GitHub projects
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`flex-1 px-4 py-3 rounded-lg border transition-colors duration-300 ${
                lightMode 
                  ? 'bg-white border-gray-300 text-gray-900 focus:border-blue-500' 
                  : 'bg-slate-800 border-slate-600 text-white focus:border-blue-400'
              }`}
            />
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className={`px-4 py-3 rounded-lg border transition-colors duration-300 ${
                lightMode 
                  ? 'bg-white border-gray-300 text-gray-900' 
                  : 'bg-slate-800 border-slate-600 text-white'
              }`}
            >
              <option value="">All Languages</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Repository Count */}
        <div className="text-center mb-8">
          <span className={`text-sm ${
            lightMode ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Showing {filteredRepositories.length} of {repositories.length} repositories
          </span>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`p-6 rounded-lg border animate-pulse ${
                lightMode ? 'bg-white border-gray-200' : 'bg-slate-800 border-slate-700'
              }`}>
                <div className={`h-6 rounded mb-3 ${
                  lightMode ? 'bg-gray-200' : 'bg-slate-700'
                }`}></div>
                <div className={`h-4 rounded mb-4 w-3/4 ${
                  lightMode ? 'bg-gray-200' : 'bg-slate-700'
                }`}></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              lightMode ? 'text-gray-900' : 'text-white'
            }`}>
              {error}
            </h3>
          </div>
        )}

        {/* Repositories Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepositories.map((repo) => (
              <div
                key={repo.id}
                className={`group p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  lightMode 
                    ? 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-blue-100' 
                    : 'bg-slate-800 border-slate-700 hover:border-blue-500 hover:shadow-blue-500/10'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-semibold text-lg group-hover:text-blue-500 transition-colors ${
                    lightMode ? 'text-gray-900' : 'text-white'
                  }`}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h3>
                  {repo.language && (
                    <span className="text-xl">{getLanguageIcon(repo.language)}</span>
                  )}
                </div>

                <p className={`text-sm mb-4 line-clamp-2 ${
                  lightMode ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {repo.description || 'No description available'}
                </p>

                <div className={`flex items-center justify-between text-sm ${
                  lightMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <div className="flex items-center gap-4">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                  <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {repo.topics.slice(0, 3).map(topic => (
                      <span
                        key={topic}
                        className={`px-2 py-1 text-xs rounded-full ${
                          lightMode 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && !error && filteredRepositories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              lightMode ? 'text-gray-900' : 'text-white'
            }`}>
              No repositories found
            </h3>
            <p className={`text-sm ${
              lightMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/sushant-portfolio/"
            className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
              lightMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}