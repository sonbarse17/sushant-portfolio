import React from 'react';

export default function DevOpsContact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Build <span className="text-blue-400">Infrastructure</span> Together
          </h2>
          <p className="text-gray-300 text-lg">Ready to scale your systems? Let's connect!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3">📡</span>
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <a href="mailto:sushantsonbarse07@gmail.com" 
                     className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      📧
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-400">sushantsonbarse07@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      💼
                    </div>
                    <div>
                      <div className="text-white font-semibold">LinkedIn</div>
                      <div className="text-gray-400">Connect professionally</div>
                    </div>
                  </a>
                  
                  <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      🐙
                    </div>
                    <div>
                      <div className="text-white font-semibold">GitHub</div>
                      <div className="text-gray-400">Check out my code</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <span className="mr-2">📊</span>
                  Quick Stats
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">50+</div>
                    <div className="text-gray-400 text-sm">Deployments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">3+</div>
                    <div className="text-gray-400 text-sm">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Contact Form */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">contact@sushant-devops.com</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-4">
                  $ curl -X POST https://api.sushant-devops.com/contact
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-blue-300 mb-2">// Your project requirements</div>
                    <div className="text-gray-300">
                      ✓ Cloud Migration<br/>
                      ✓ CI/CD Pipeline Setup<br/>
                      ✓ Kubernetes Deployment<br/>
                      ✓ Infrastructure Automation<br/>
                      ✓ Monitoring & Alerting
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-yellow-400 mb-2">Response:</div>
                    <div className="text-green-400">
                      {`{
  "status": "ready_to_help",
  "response_time": "< 24 hours",
  "expertise": ["AWS", "Kubernetes", "Docker"],
  "availability": "open_for_projects"
}`}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="mailto:sushantsonbarse07@gmail.com" 
                     className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300">
                    Send Message
                  </a>
                  <a href="/sushant-portfolio/sushant_sonbarse_resume.pdf" download
                     className="px-6 py-3 border-2 border-blue-500 rounded-lg text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-300">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}