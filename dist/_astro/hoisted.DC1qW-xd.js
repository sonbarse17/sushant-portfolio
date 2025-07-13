import"./hoisted.bnrPlIK7.js";const h={threshold:.1,rootMargin:"0px 0px -50px 0px"},c=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(o.target.classList.add("animate"),c.unobserve(o.target))})},h);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("section").forEach(o=>{o.classList.add("animate-on-scroll"),c.observe(o)})});const l=["DevOps Engineer","Platform Engineer","Site Reliability Engineer","Cloud Engineer"];let a=0,s=0,n=!1;function d(){const e=document.getElementById("typing-text"),o=l[a];n?(e.textContent=o.substring(0,s-1),s--,s===0&&(n=!1,a=(a+1)%l.length)):(e.textContent=o.substring(0,s+1),s++,s===o.length&&setTimeout(()=>n=!0,2e3)),setTimeout(d,n?50:100)}document.addEventListener("DOMContentLoaded",()=>{setTimeout(d,1e3)});function f(){document.getElementById("demo-modal").classList.add("hidden"),document.body.style.overflow="auto"}document.getElementById("demo-modal").addEventListener("click",function(e){e.target===this&&f()});function v(){document.getElementById("blog-modal").classList.add("hidden"),document.body.style.overflow="auto"}document.getElementById("blog-modal").addEventListener("click",function(e){e.target===this&&v()});function y(){document.getElementById("testimonial-modal").classList.add("hidden"),document.body.style.overflow="auto"}document.getElementById("testimonial-modal").addEventListener("click",function(e){e.target===this&&y()});function E(){}document.addEventListener("DOMContentLoaded",E);const m="sonbarse17",x=`https://api.github.com/users/${m}`,w=`https://api.github.com/users/${m}/repos?sort=updated&per_page=100`;async function I(){try{const o=await(await fetch(x)).json();document.getElementById("repo-count").textContent=o.public_repos,document.getElementById("follower-count").textContent=o.followers,document.getElementById("following-count").textContent=o.following;const r=await(await fetch(w)).json(),i=["sushant-portfolio","DevOps-Projects","AWS-Infrastructure","Kubernetes-Deployment","CI-CD-Pipeline","Terraform-Modules"],g=r.filter(t=>!t.fork&&i.includes(t.name)).concat(r.filter(t=>!t.fork&&!i.includes(t.name)).sort((t,b)=>b.stargazers_count-t.stargazers_count)).slice(0,6),p=document.getElementById("repos-list");p.innerHTML=g.map(t=>`
        <div class="repo-card">
          <h5><a href="${t.html_url}" target="_blank" style="color: #3b82f6 !important;">${t.name}</a></h5>
          <p style="color: inherit !important;">${t.description||"No description available"}</p>
          <div class="repo-stats">
            <span style="color: inherit !important;">⭐ ${t.stargazers_count}</span>
            <span style="color: inherit !important;">🍴 ${t.forks_count}</span>
            ${t.language?`<span style="color: inherit !important;">💻 ${t.language}</span>`:""}
          </div>
        </div>
      `).join(""),L()}catch(e){console.error("Error fetching GitHub data:",e),document.getElementById("repo-count").textContent="Error",document.getElementById("follower-count").textContent="Error",document.getElementById("following-count").textContent="Error"}}function L(){const e=`
      <div class="text-center mb-8">
        <img src="/sushant-portfolio/images/banner.png" alt="DevOps Banner" class="mx-auto rounded-lg shadow-lg mb-6 max-w-full h-auto">
        <h1 style="color: #3b82f6 !important;">Hey Everyone 👋, I'm Sushant Sonbarse</h1>
        <h3 class="text-xl mb-6">A passionate DevOps Engineer from India. I work in the Corporate IT Sector</h3>
        
        <div class="flex justify-center space-x-4 mb-8">
          <a href="https://github.com/sonbarse17" target="_blank">
            <img src="https://img.shields.io/github/followers/sonbarse17?label=Follow&style=social" alt="GitHub Followers">
          </a>
          <a href="https://linkedin.com/in/sushant-sonbarse" target="_blank">
            <img src="https://img.shields.io/badge/LinkedIn-Sushant%20Sonbarse-blue?logo=linkedin&style=flat-square" alt="LinkedIn">
          </a>
        </div>
        
        <img src="https://komarev.com/ghpvc/?username=sonbarse17&label=Profile%20views&color=0e75b6&style=flat" alt="Profile Views" class="mx-auto">
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <ul class="space-y-2">
            <li>👨‍💻 All of my projects are available at <a href="https://github.com/sonbarse17" target="_blank" style="color: #3b82f6 !important;">GitHub</a></li>
            <li>💬 Ask me about <strong>DevOps & Cloud DevOps</strong></li>
            <li>📫 How to reach me <strong>sushantsonbarse07@gmail.com</strong></li>
          </ul>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif" alt="Coding Animation" class="w-full max-w-sm mx-auto">
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="text-center">
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=sonbarse17&show_icons=true&locale=en&layout=compact&theme=vue&hide_border=true" alt="Top Languages" class="mx-auto">
        </div>
        <div class="text-center">
          <img src="https://github-readme-stats.vercel.app/api?username=sonbarse17&show_icons=true&locale=en&theme=vue&hide_border=true" alt="GitHub Stats" class="mx-auto">
        </div>
      </div>
      
      <div class="text-center">
        <h3 class="text-xl font-semibold mb-4">👨‍💼 About Me & 🤝 Open to Collaborations</h3>
        <p class="mb-4">🤝 Open to <strong>Project Collaborations</strong><br>
        💼 Offering <strong>DevOps Consulting / Mentorship</strong><br>
        📧 Let's chat: <a href="mailto:sushantsonbarse07@gmail.com" style="color: #3b82f6 !important;">sushantsonbarse07@gmail.com</a></p>
        
        <blockquote class="text-lg border-l-4 border-blue-400 pl-4 italic p-4 rounded-r-lg">
          "Helping people crack DevOps with real-world knowledge. Let's build and automate the future, one pipeline at a time!"
        </blockquote>
      </div>
    `;document.getElementById("github-readme").innerHTML=e}document.addEventListener("DOMContentLoaded",I);
