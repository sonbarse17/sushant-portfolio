// Dark mode with persistence
const toggle = document.getElementById('dark-mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Initialize dark mode
function initDarkMode() {
  const saved = localStorage.getItem('darkMode');
  const shouldBeDark = saved ? saved === 'true' : prefersDark.matches;
  
  if (shouldBeDark) {
    document.body.classList.add('dark-mode');
  }
}

// Toggle dark mode
toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark);
});

// Listen for system preference changes
prefersDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('darkMode')) {
    document.body.classList.toggle('dark-mode', e.matches);
  }
});

// Initialize on load
initDarkMode();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Lazy load animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section, .hero, .footer').forEach(el => {
  observer.observe(el);
});

// GitHub API Integration
const GITHUB_USERNAME = 'sonbarse17';
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`;
const GITHUB_REPOS_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const GITHUB_README_API = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_USERNAME}/readme`;

async function fetchGitHubData() {
  try {
    // Fetch user data
    const userResponse = await fetch(GITHUB_API);
    const userData = await userResponse.json();
    
    document.getElementById('repo-count').textContent = userData.public_repos;
    document.getElementById('follower-count').textContent = userData.followers;
    document.getElementById('following-count').textContent = userData.following;
    
    // Fetch repositories
    const reposResponse = await fetch(GITHUB_REPOS_API + '?sort=updated&per_page=6');
    const reposData = await reposResponse.json();
    
    const reposList = document.getElementById('repos-list');
    reposList.innerHTML = reposData.map(repo => `
      <div class="repo-card">
        <h5><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
        <p>${repo.description || 'No description available'}</p>
        <div class="repo-stats">
          <span>⭐ ${repo.stargazers_count}</span>
          <span>🍴 ${repo.forks_count}</span>
          ${repo.language ? `<span>💻 ${repo.language}</span>` : ''}
        </div>
      </div>
    `).join('');
    
    // Fetch README
    try {
      const readmeResponse = await fetch(GITHUB_README_API);
      const readmeData = await readmeResponse.json();
      const readmeContent = atob(readmeData.content);
      
      document.getElementById('github-readme').innerHTML = `
        <h4>GitHub README</h4>
        <div class="readme-content">${markdownToHtml(readmeContent)}</div>
      `;
    } catch (error) {
      document.getElementById('github-readme').innerHTML = `
        <h4>GitHub README</h4>
        <p>README not found or not accessible.</p>
      `;
    }
    
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    document.getElementById('repo-count').textContent = 'Error';
    document.getElementById('follower-count').textContent = 'Error';
    document.getElementById('following-count').textContent = 'Error';
  }
}

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2" target="_blank">$1</a>')
    .replace(/\n/gim, '<br>');
}

// Load GitHub data when page loads
fetchGitHubData();
