import { useState, useEffect } from 'react';

export default function DevOpsPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  
  const pipelineSteps = [
    { name: 'Code', icon: '💻', color: 'bg-blue-500', status: 'completed' },
    { name: 'Build', icon: '🔨', color: 'bg-orange-500', status: 'completed' },
    { name: 'Test', icon: '🧪', color: 'bg-green-500', status: 'running' },
    { name: 'Deploy', icon: '🚀', color: 'bg-purple-500', status: 'pending' },
    { name: 'Monitor', icon: '📊', color: 'bg-cyan-500', status: 'pending' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            DevOps <span className="text-blue-400">Pipeline</span>
          </h2>
          <p className="text-gray-300 text-lg">Automated CI/CD workflow in action</p>
        </div>

        {/* Pipeline Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Pipeline Flow */}
            <div className="flex justify-between items-center mb-8">
              {pipelineSteps.map((step, index) => (
                <div key={step.name} className="flex flex-col items-center relative">
                  {/* Connection Line */}
                  {index < pipelineSteps.length - 1 && (
                    <div className={`absolute top-8 left-16 w-24 h-1 transition-all duration-500 ${
                      activeStep > index ? 'bg-green-400' : 'bg-gray-600'
                    }`}></div>
                  )}
                  
                  {/* Step Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                    activeStep === index ? `${step.color} scale-110 shadow-lg` : 
                    activeStep > index ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    {activeStep === index ? (
                      <div className="animate-spin">⚙️</div>
                    ) : activeStep > index ? (
                      '✅'
                    ) : (
                      step.icon
                    )}
                  </div>
                  
                  {/* Step Label */}
                  <span className={`mt-3 font-semibold transition-colors duration-300 ${
                    activeStep >= index ? 'text-white' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className={`mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                    activeStep === index ? 'bg-yellow-500 text-black animate-pulse' :
                    activeStep > index ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {activeStep === index ? 'Running' :
                     activeStep > index ? 'Done' : 'Pending'}
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline Logs */}
            <div className="bg-black rounded-lg border border-gray-700 p-6 font-mono text-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-400">Pipeline Logs</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">LIVE</span>
                </div>
              </div>
              
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">[INFO]</span>
                  <span>Starting CI/CD pipeline...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">[SUCCESS]</span>
                  <span>Code checkout completed ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">[SUCCESS]</span>
                  <span>Docker build completed ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">[RUNNING]</span>
                  <span>Running unit tests... {activeStep === 2 && <span className="animate-pulse">●</span>}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">[PENDING]</span>
                  <span>Deployment to Kubernetes...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Jenkins', icon: '🔧', color: 'text-orange-400' },
            { name: 'Docker', icon: '🐳', color: 'text-blue-400' },
            { name: 'Kubernetes', icon: '☸️', color: 'text-cyan-400' },
            { name: 'AWS', icon: '☁️', color: 'text-yellow-400' },
            { name: 'Terraform', icon: '🏗️', color: 'text-purple-400' }
          ].map((tech, index) => (
            <div key={tech.name} className="text-center group cursor-pointer">
              <div className={`text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}