import { useState, useEffect } from 'react';

const projects = [
  {
    title: "DevOps Workflow Automation",
    summary: "Complete CI/CD pipeline with automated testing and Kubernetes deployment",
    description: "A comprehensive automated CI/CD pipeline featuring planning, building, testing, and deploying a microservices application to a Kubernetes cluster with continuous monitoring and alerting.",
    technologies: ["CI/CD", "Jenkins", "Docker", "Kubernetes", "Prometheus"],
    link: "/sushant-portfolio/projects/devops-workflow",
    github: "https://github.com/sonbarse17/devops-workflow",
    demo: null
  },
  {
    title: "End to End CI/CD Implementation",
    summary: "E-commerce platform CI/CD reducing deployment time by 85%",
    description: "Implemented an automated CI/CD pipeline for an e-commerce platform, reducing deployment time by 85%. Optimized Docker images, used Helm for Kubernetes deployments, and created Python automation scripts.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Helm", "Python"],
    link: "/sushant-portfolio/projects/cicd-implementation",
    github: "https://github.com/sonbarse17/ecommerce-cicd",
    demo: null
  },
  {
    title: "Three Tier Serverless Architecture",
    summary: "Scalable AWS serverless architecture with Lambda and CloudFront",
    description: "Designed and deployed a scalable, serverless AWS architecture with EC2, VPC, Lambda, RDS, S3, CloudFront, and comprehensive monitoring via the EFK stack.",
    technologies: ["AWS", "Lambda", "S3", "CloudFront", "EFK Stack"],
    link: "/sushant-portfolio/projects/serverless-architecture",
    github: "https://github.com/sonbarse17/aws-serverless",
    demo: null
  },
  {
    title: "CRM Real Estate Microservices Deployment",
    summary: "35 microservices CRM platform reducing release time by 75%",
    description: "Deployed a comprehensive CRM platform with 35 microservices using Angular, Spring Boot, Terraform, and AWS EKS. Successfully reduced release duration from 4 hours to 1 hour.",
    technologies: ["Angular", "Spring Boot", "Terraform", "AWS EKS"],
    link: "/sushant-portfolio/projects/crm-microservices",
    github: "https://github.com/sonbarse17/crm-microservices",
    demo: null
  }
];

export default function Projects() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setLightMode(theme === 'light');
  }, []);

  const techIcons = {
    'Jenkins': '/sushant-portfolio/icons/jenkins.png',
    'Docker': '/sushant-portfolio/icons/docker.png',
    'Kubernetes': '/sushant-portfolio/icons/kubernetes.png',
    'Helm': '/sushant-portfolio/icons/helm.png',
    'Python': '/sushant-portfolio/icons/python.svg',
    'AWS': '/sushant-portfolio/icons/aws.png',
    'Lambda': '/sushant-portfolio/icons/aws.png',
    'S3': '/sushant-portfolio/icons/aws.png',
    'CloudFront': '/sushant-portfolio/icons/aws.png',
    'Angular': '🅰️',
    'Spring Boot': '🍃',
    'Terraform': '/sushant-portfolio/icons/terraform.png',
    'AWS EKS': '/sushant-portfolio/icons/kubernetes.png',
    'EFK Stack': '📊',
    'CI/CD': '🚀',
    'Prometheus': '/sushant-portfolio/icons/prometheus.png'
  };

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
      lightMode ? 'bg-white' : 'bg-black'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
            lightMode ? 'text-gray-900' : 'text-white'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg transition-colors duration-300 ${
            lightMode ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Real-world DevOps implementations and solutions
          </p>
        </div>

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
                <div className={`mb-6 rounded-lg overflow-hidden border transition-colors duration-300 ${
                  lightMode ? 'border-gray-200' : 'border-gray-700'
                }`}>
                  <div className={`h-32 flex items-center justify-center transition-colors duration-300 ${
                    lightMode ? 'bg-gradient-to-br from-gray-100 to-gray-200' : 'bg-gradient-to-br from-gray-800 to-gray-700'
                  }`}>
                    <div className="text-4xl">🚀</div>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 ${
                    lightMode ? 'text-gray-900' : 'text-white'
                  }`}>
                    {project.title}
                  </h3>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    lightMode ? 'bg-blue-100 group-hover:bg-blue-200' : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                  }`}>
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                </div>

                <p className={`text-sm font-medium mb-3 transition-colors duration-300 ${
                  lightMode ? 'text-blue-600' : 'text-cyan-400'
                }`}>
                  {project.summary}
                </p>
                
                <p className={`mb-6 leading-relaxed text-sm transition-colors duration-300 ${
                  lightMode ? 'text-gray-600' : 'text-slate-300'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border hover:border-blue-500/50 transition-colors duration-300 inline-flex items-center gap-2 ${
                        lightMode ? 'bg-gray-100/80 text-blue-600 border-gray-300/50' : 'bg-gray-800/80 text-blue-300 border-gray-700/50'
                      }`}
                    >
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-3.5 h-3.5">
                        {techIcons[tech] && (techIcons[tech].endsWith('.png') || techIcons[tech].endsWith('.svg')) ? (
                          <img src={techIcons[tech]} alt={tech} className="object-contain w-3.5 h-3.5" />
                        ) : (
                          <span className="text-xs leading-none">{techIcons[tech] || '🔧'}</span>
                        )}
                      </div>
                      <span className="whitespace-nowrap">{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href={project.link}
                    className={`inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 border text-sm ${
                      lightMode 
                        ? 'bg-blue-100/50 hover:bg-blue-200/50 text-blue-600 border-blue-300/50 hover:border-blue-500/50' 
                        : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border-blue-500/30 hover:border-blue-400/50'
                    }`}
                  >
                    Details
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 border text-sm ${
                        lightMode 
                          ? 'bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 border-gray-300/50 hover:border-gray-500/50' 
                          : 'bg-slate-500/20 hover:bg-slate-500/30 text-slate-400 border-slate-500/30 hover:border-slate-400/50'
                      }`}
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
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
      </div>
    </section>
  );
}