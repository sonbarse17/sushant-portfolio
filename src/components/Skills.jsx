const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
  },
  {
    category: "DevOps Tools",
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Maven"],
  },
  {
    category: "Containerization",
    items: ["Docker", "Helm"],
  },
  {
    category: "Monitoring",
    items: ["Prometheus", "Grafana", "Datadog", "EFK Stack"],
  },
  {
    category: "Scripting",
    items: ["Bash", "Python"],
  },
  {
    category: "Other",
    items: ["Linux", "Git"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A look at the technologies I'm proficient with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
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