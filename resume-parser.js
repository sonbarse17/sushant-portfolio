// Resume Parser - Extract details from PDF and update portfolio
async function parseResumeAndUpdatePortfolio() {
  try {
    // Since we can't directly parse PDF in browser, we'll create a manual data structure
    // based on the resume file. You can update this object with your actual resume details.
    
    const resumeData = {
      personal: {
        name: "Sushant Sonbarse",
        title: "DevOps Engineer",
        email: "sushantsonbarse07@gmail.com",
        phone: "+91 9146570820",
        location: "Nagpur, Maharashtra, India",
        linkedin: "https://www.linkedin.com/in/sushant-sonbarse/",
        github: "https://github.com/sonbarse17"
      },
      experience: {
        current_position: "DevOps Engineer",
        company: "HisanLabs Pvt Ltd", // Update with actual company
        experience_months: 9,
        specialties: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform", "Jenkins"]
      },
      education: {
        degree: "Bachelor of Computer Science",
        university: "Rashtrasant Tukdoji Maharaj Nagpur University",
        years: "2020-2023",
        achievement: "Top 10% in Academics"
      },

      skills: {
        cloud: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
        devops: ["Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Maven"],
        containerization: ["Docker", "Helm"],
        monitoring: ["Prometheus", "Grafana", "Datadog", "EFK Stack"],
        scripting: ["Bash", "Python"],
        other: ["Linux", "Git"]
      }
    };
    
    // Update LinkedIn section with resume data
    updateLinkedInSection(resumeData);
    
    // Update other sections
    updateAboutSection(resumeData);
    
    console.log("Portfolio updated with resume data!");
    
  } catch (error) {
    console.error("Error parsing resume:", error);
  }
}

function updateLinkedInSection(data) {
  const linkedinDetails = document.querySelector('.linkedin-details');
  if (linkedinDetails) {
    linkedinDetails.innerHTML = `
      <p><strong>Current Position:</strong> ${data.experience.current_position}</p>
      <p><strong>Company:</strong> ${data.experience.company}</p>
      <p><strong>Location:</strong> ${data.personal.location}</p>
      <p><strong>Experience:</strong> ${data.experience.experience_months}+ months in DevOps and Cloud Technologies</p>
      <p><strong>Specialties:</strong> ${data.experience.specialties.join(', ')}</p>
      <p><strong>Education:</strong> ${data.education.degree}</p>
    `;
  }
}

function updateAboutSection(data) {
  const aboutSection = document.querySelector('#about p');
  if (aboutSection) {
    aboutSection.textContent = `DevOps Engineer with ${data.experience.experience_months} months of hands-on experience in orchestration, containerization, and CI/CD implementation. Currently working at ${data.experience.company}. Skilled in designing scalable, automated solutions to streamline deployments and improve operational efficiency. Passionate about infrastructure as code, cloud technologies, and continuous improvement. Strong background in ${data.experience.specialties.join(', ')}.`;
  }
}



// Auto-run when page loads
document.addEventListener('DOMContentLoaded', parseResumeAndUpdatePortfolio);