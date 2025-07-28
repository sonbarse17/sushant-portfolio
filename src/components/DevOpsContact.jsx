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
                     className="flex items-center space-x-4 p-5 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 group hover:scale-[1.02] border border-slate-700 hover:border-blue-500/30">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">Email</div>
                      <div className="text-slate-300 text-sm">sushantsonbarse07@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/sushant-sonbarse/" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-4 p-5 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 group hover:scale-[1.02] border border-slate-700 hover:border-blue-500/30">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">LinkedIn</div>
                      <div className="text-slate-300 text-sm">Connect professionally</div>
                    </div>
                  </a>
                  
                  <a href="https://github.com/sonbarse17" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-4 p-5 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 group hover:scale-[1.02] border border-slate-700 hover:border-blue-500/30">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">GitHub</div>
                      <div className="text-slate-300 text-sm">Check out my code</div>
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
                    <div className="text-2xl font-bold text-yellow-400">1+</div>
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