import { useState, useEffect } from 'react';

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
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
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
              <div className="relative inline-block">
                <img 
                  src="/sushant-portfolio/images/Snapchat-1800569552-01-removebg-preview.png" 
                  alt="Sushant Sonbarse" 
                  className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/50"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sushant Sonbarse
              </span>
            </h1>

            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                DevOps Engineer
              </span>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Building scalable infrastructure with <span className="text-blue-400 font-semibold">Kubernetes</span>, 
              <span className="text-orange-400 font-semibold"> AWS</span>, and 
              <span className="text-green-400 font-semibold"> CI/CD</span> pipelines
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/sushant-portfolio/sushant_sonbarse_resume.pdf" download 
                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                📄 Download Resume
              </a>
              <a href="#contact" 
                 className="px-8 py-4 border-2 border-blue-500 rounded-lg text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-300">
                💬 Contact Me
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
  );
}