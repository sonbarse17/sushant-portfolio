import { useEffect } from 'react';

export default function StarBackground() {
  useEffect(() => {
    const loadTsParticles = async () => {
      // Load tsparticles
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js';
      script.onload = () => {
        window.tsParticles.load('tsparticles', {
          background: {
            color: {
              value: '#0F172A'
            }
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse'
              }
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: '#ffffff'
            },
            links: {
              enable: false
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce'
              },
              random: true,
              speed: 0.5,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 150
            },
            opacity: {
              value: {
                min: 0.1,
                max: 0.8
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1
              }
            },
            shape: {
              type: 'circle'
            },
            size: {
              value: {
                min: 1,
                max: 3
              }
            }
          },
          detectRetina: true
        });
      };
      document.head.appendChild(script);
    };

    loadTsParticles();
  }, []);

  return (
    <div 
      id="tsparticles" 
      className="fixed inset-0 w-full h-full -z-10"
      style={{ zIndex: -1 }}
    />
  );
}