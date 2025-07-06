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
const GITHUB_PINNED_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;
const GITHUB_README_API = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_USERNAME}/readme`;

async function fetchGitHubData() {
  try {
    // Setup headers with token if available
    const headers = {};
    if (window.GITHUB_CONFIG && window.GITHUB_CONFIG.token !== 'YOUR_TOKEN_HERE') {
      headers['Authorization'] = `token ${window.GITHUB_CONFIG.token}`;
    }
    
    // Fetch user data
    const userResponse = await fetch(GITHUB_API, { headers });
    const userData = await userResponse.json();
    
    document.getElementById('repo-count').textContent = userData.public_repos;
    document.getElementById('follower-count').textContent = userData.followers;
    document.getElementById('following-count').textContent = userData.following;
    
    // Fetch repositories and filter pinned ones
    const reposResponse = await fetch(GITHUB_PINNED_API, { headers });
    const allRepos = await reposResponse.json();
    
    // Filter and sort repositories by relevance
    const filteredRepos = allRepos
      .filter(repo => !repo.fork)
      .sort((a, b) => {
        // Prioritize repos with stars, recent activity, and specific keywords
        const aScore = (a.stargazers_count * 3) + (a.forks_count * 2) + 
                      (a.name.toLowerCase().includes('devops') ? 10 : 0) +
                      (a.name.toLowerCase().includes('aws') ? 10 : 0) +
                      (a.name.toLowerCase().includes('docker') ? 10 : 0) +
                      (a.name.toLowerCase().includes('kubernetes') ? 10 : 0) +
                      (a.name.toLowerCase().includes('terraform') ? 10 : 0) +
                      (a.name.toLowerCase().includes('jenkins') ? 10 : 0) +
                      (a.name.toLowerCase().includes('portfolio') ? 15 : 0) +
                      (a.name.toLowerCase().includes('project') ? 8 : 0);
        
        const bScore = (b.stargazers_count * 3) + (b.forks_count * 2) + 
                      (b.name.toLowerCase().includes('devops') ? 10 : 0) +
                      (b.name.toLowerCase().includes('aws') ? 10 : 0) +
                      (b.name.toLowerCase().includes('docker') ? 10 : 0) +
                      (b.name.toLowerCase().includes('kubernetes') ? 10 : 0) +
                      (b.name.toLowerCase().includes('terraform') ? 10 : 0) +
                      (b.name.toLowerCase().includes('jenkins') ? 10 : 0) +
                      (b.name.toLowerCase().includes('portfolio') ? 15 : 0) +
                      (b.name.toLowerCase().includes('project') ? 8 : 0);
        
        return bScore - aScore;
      })
      .slice(0, 6);
    
    const reposData = filteredRepos;
    
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
    
    // Use provided README content
    const readmeContent = `<h1 align="center">Hey Everyone 👋, I'm Sushant Sonbarse</h1>

<div align="center">
  <img src="images/banner.png" alt="DevOps Banner">
</div>

<h3 align="center">A passionate DevOps Engineer from India. I work in the Corporate IT Sector</h3>

<p align="center">
  <a href="https://github.com/sonbarse17">
    <img src="https://img.shields.io/github/followers/sonbarse17?label=Follow&style=social" />
  </a>
  <a href="https://linkedin.com/in/sushant-sonbarse">
    <img src="https://img.shields.io/badge/LinkedIn-Sushant%20Sonbarse-blue?logo=linkedin&style=flat-square" />
  </a>
</p>

<img align="right" alt="Coding" width="400" src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif">

<p align="left">
  <img src="https://komarev.com/ghpvc/?username=sonbarse17&label=Profile%20views&color=0e75b6&style=flat" alt="Profile Views" />
</p>

- 👨‍💻 All of my projects are available at [https://github.com/sonbarse17](https://github.com/sonbarse17)
- 💬 Ask me about **DevOps & Cloud DevOps**
- 📫 How to reach me **sushantsonbarse07@gmail.com**

---

<h3 align="left">Connect with me:</h3>
<p align="left">
  <a href="https://linkedin.com/in/sushant-sonbarse" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" /></a>
  <a href="https://instagram.com/sushant_sonbarse_" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40" /></a>
</p>

---

<h3 align="left">Languages and Tools:</h3>
<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" width="40" height="40"/>
</p>

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=sonbarse17&show_icons=true&locale=en&layout=compact&theme=vue&hide_border=true" alt="Top Langs" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=sonbarse17&show_icons=true&locale=en&theme=vue&hide_border=true" alt="GitHub Stats" /></p>

---

### 👨‍💼 About Me & 🤝 Open to Collaborations

🤝 Open to **Project Collaborations**
💼 Offering **DevOps Consulting / Mentorship**
📧 Let's chat: [sushantsonbarse07@gmail.com](mailto:sushantsonbarse07@gmail.com)

> *"Helping people crack DevOps with real-world knowledge. Let's build and automate the future, one pipeline at a time!"*`;
    
    document.getElementById('github-readme').innerHTML = `
      <h4>📋 GitHub Profile README</h4>
      <div class="readme-content">${readmeContent}</div>
    `;
    
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
