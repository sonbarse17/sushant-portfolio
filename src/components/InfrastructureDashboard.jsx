import { useState, useEffect } from 'react';

export default function InfrastructureDashboard() {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    memory: 67,
    disk: 23,
    network: 89
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        disk: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const MetricCard = ({ title, value, icon, color }) => (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-300 font-medium">{title}</h3>
        <span className={`text-2xl ${color}`}>{icon}</span>
      </div>
      <div className="mb-3">
        <div className={`text-3xl font-bold ${color}`}>{value}%</div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-1000 ${color.replace('text', 'bg')}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Infrastructure <span className="text-green-400">Monitoring</span>
          </h2>
          <p className="text-gray-300 text-lg">Real-time system metrics and performance</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MetricCard title="CPU Usage" value={metrics.cpu} icon="🖥️" color="text-blue-400" />
            <MetricCard title="Memory" value={metrics.memory} icon="💾" color="text-green-400" />
            <MetricCard title="Disk I/O" value={metrics.disk} icon="💿" color="text-yellow-400" />
            <MetricCard title="Network" value={metrics.network} icon="🌐" color="text-purple-400" />
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gray-900 rounded-lg border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Cloud Architecture</h3>
            
            <div className="relative">
              {/* Load Balancer */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-lg text-3xl">
                  ⚖️
                </div>
                <div className="text-white font-semibold mt-2">Load Balancer</div>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-12 bg-gray-600"></div>
              </div>

              {/* Kubernetes Cluster */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[1, 2, 3].map((node) => (
                  <div key={node} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-lg text-2xl mb-2">
                      ☸️
                    </div>
                    <div className="text-white font-medium">Node {node}</div>
                    <div className="text-gray-400 text-sm">4 Pods Running</div>
                  </div>
                ))}
              </div>

              {/* Database Layer */}
              <div className="flex justify-center">
                <div className="w-px h-12 bg-gray-600"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-lg text-2xl mb-2">
                    🗄️
                  </div>
                  <div className="text-white font-medium">PostgreSQL</div>
                  <div className="text-gray-400 text-sm">Primary DB</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg text-2xl mb-2">
                    ⚡
                  </div>
                  <div className="text-white font-medium">Redis</div>
                  <div className="text-gray-400 text-sm">Cache Layer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">All Systems Operational</span>
              </div>
              <div className="text-gray-300 text-sm mt-2">99.9% uptime this month</div>
            </div>
            
            <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-semibold">Auto-scaling Active</span>
              </div>
              <div className="text-gray-300 text-sm mt-2">3 instances running</div>
            </div>
            
            <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-400 font-semibold">Monitoring Active</span>
              </div>
              <div className="text-gray-300 text-sm mt-2">24/7 alerting enabled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}