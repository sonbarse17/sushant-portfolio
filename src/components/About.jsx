import ScrollFadeIn from './ScrollFadeIn.jsx';

export default function About() {
  return (
    <ScrollFadeIn>
      <section id="about" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A brief introduction to my professional background and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-300 mb-4">
                Who I Am
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                I am a DevOps Engineer with a passion for automating and optimizing mission-critical deployments. I have a proven track record of building and maintaining scalable, secure, and reliable infrastructure.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                My expertise includes cloud platforms like AWS, containerization with Docker and Kubernetes, and infrastructure as code using Terraform. I am always eager to learn new technologies and take on new challenges.
              </p>
              <div className="flex space-x-4">
                <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors">View Projects</a>
                <a href="#contact" className="px-6 py-3 border-2 border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Contact Me</a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/sushant-portfolio/images/Snapchat-1800569552-01-removebg-preview.png" 
                alt="Sushant Sonbarse" 
                className="rounded-full shadow-2xl mx-auto lg:mx-0 w-64 h-64 object-cover border-4 border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}