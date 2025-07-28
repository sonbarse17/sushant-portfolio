import { useState, useEffect } from 'react';
import ScrollFadeIn from './ScrollFadeIn.jsx';

export default function DevOpsHero() {
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const commands = [
    'kubectl get pods --all-namespaces',
    'docker ps -a',
    'terraform plan',
    'aws ec2 describe-instances',
    'helm list --all-namespaces'
  ];

  useEffect(() => {
    let index = 0;
    const command = commands[currentCommand];
    
    const typeCommand = () => {
      if (index < command.length) {
        setTerminalText(command.slice(0, index + 1));
        index++;
        setTimeout(typeCommand, 100);
      } else {
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.length);
          setTerminalText('');
          index = 0;
        }, 2000);
      }
    };

    const timer = setTimeout(typeCommand, 500);
    return () => clearTimeout(timer);
  }, [currentCommand]);

  return (
    <ScrollFadeIn>
      <section className="min-h-screen bg-transparent relative overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      {/* Floating DevOps Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center animate-float">
          <span className="text-2xl">🐳</span>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center animate-bounce-slow">
          <span className="text-xl">☸️</span>
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center animate-pulse">
          <span className="text-xl">🔧</span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Profile & Info */}
          <div className="text-center lg:text-left">


            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                <span className="text-white text-3xl md:text-4xl font-light block mb-2 tracking-wide text-contrast">
                  Hello, I'm
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] font-black tracking-tight" style="text-shadow: 0 2px 4px rgba(0,0,0,0.8)">
                  Sushant Sonbarse
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto lg:mx-0 mb-6"></div>
            </div>

            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 backdrop-blur-sm border border-blue-400/30">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                DevOps Engineer
              </span>
            </div>

            <p className="text-white text-xl mb-4 max-w-2xl leading-relaxed text-contrast">
              <span className="font-semibold text-white">1+ years</span> of experience building scalable cloud infrastructure and automating deployment pipelines.
            </p>
            
            <p className="text-slate-200 text-lg mb-10 max-w-2xl text-contrast">
              Specialized in <span className="text-blue-300 font-medium">AWS</span>, 
              <span className="text-cyan-300 font-medium">Kubernetes</span>, 
              <span className="text-green-300 font-medium">Docker</span>, and 
              <span className="text-purple-300 font-medium">CI/CD automation</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/sushant-portfolio/sushant_sonbarse_resume.pdf" download 
                 className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
              <a href="#contact" 
                 className="group px-8 py-4 border-2 border-blue-500/50 rounded-xl text-blue-400 font-semibold hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Terminal Simulation */}
          <div className="relative">
            <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-t-lg border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">sushant@devops-workstation</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">
                  $ whoami
                </div>
                <div className="text-white mb-4">
                  DevOps Engineer | Infrastructure Automation Specialist
                </div>
                
                <div className="text-green-400 mb-2">
                  $ cat skills.txt
                </div>
                <div className="text-blue-300 mb-4">
                  ☸️ Kubernetes | 🐳 Docker | ☁️ AWS | 🔧 Terraform | 🚀 Jenkins
                </div>
                
                <div className="text-green-400 mb-2">
                  $ {terminalText}<span className="animate-pulse">|</span>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-xs">
                  <div className="text-center">
                    <div className="text-green-400 text-lg mb-1">99.9%</div>
                    <div className="text-gray-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 text-lg mb-1">50+</div>
                    <div className="text-gray-400">Deployments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 text-lg mb-1">24/7</div>
                    <div className="text-gray-400">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </ScrollFadeIn>
  );
}