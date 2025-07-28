import { useState, useEffect } from 'react';

const projects = [
  {
    title: "DevOps Workflow Automation",
    description: "A complete, automated CI/CD pipeline featuring planning, building, testing, and deploying a microservices application to a Kubernetes cluster with continuous monitoring.",
    technologies: ["CI/CD", "Jenkins", "Docker", "Kubernetes", "Prometheus"],
    link: "/sushant-portfolio/projects/devops-workflow"
  },
  {
    title: "End to End CI/CD Implementation",
    description: "Implemented an automated CI/CD pipeline for an e-commerce platform, reducing deployment time by 85%. Optimized Docker images, used Helm for Kubernetes deployments, and created Python automation scripts.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Helm", "Python"],
    link: "/sushant-portfolio/projects/cicd-implementation"
  },
  {
    title: "Three Tier Serverless Architecture",
    description: "Designed and deployed a scalable, serverless AWS architecture with EC2, VPC, Lambda, RDS, S3, CloudFront, and monitoring via the EFK stack.",
    technologies: ["AWS", "Lambda", "S3", "CloudFront", "EFK Stack"],
    link: "/sushant-portfolio/projects/serverless-architecture"
  },
  {
    title: "CRM Real Estate Microservices Deployment",
    description: "Deployed a CRM platform with 35 microservices using Angular, Spring Boot, Terraform, and AWS EKS. Cut release duration from 4 hours to 1 hour.",
    technologies: ["Angular", "Spring Boot", "Terraform", "AWS EKS"],
    link: "/sushant-portfolio/projects/crm-microservices"
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

                <p className={`mb-6 leading-relaxed text-sm transition-colors duration-300 ${
                  lightMode ? 'text-gray-600' : 'text-gray-300'
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

                <div className="flex items-center justify-between">
                  <a 
                    href={project.link}
                    className={`inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 border ${
                      lightMode 
                        ? 'bg-blue-100/50 hover:bg-blue-200/50 text-blue-600 border-blue-300/50 hover:border-blue-500/50' 
                        : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border-blue-500/30 hover:border-blue-400/50'
                    }`}
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>

                  <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                    lightMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-xs">Recent</span>
                  </div>
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