const experiences = [
  {
    title: "DevOps Intern",
    company: "HisanLabs",
    period: "2024 - Present",
    description: "Focused on automating deployment pipelines and managing cloud infrastructure to improve efficiency and reliability.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Linux"]
  }
];

export default function Experience() {
  return (
    
      <section id="experience" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Work Experience
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              My professional journey and key contributions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 mb-8 transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300">{exp.title}</h3>
                    <p className="text-lg text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 font-medium bg-gray-700 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
}