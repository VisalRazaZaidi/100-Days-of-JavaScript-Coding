// Sample project data
const projects = [
    { day: 1, name: "Pixel Art Generator", demoLink: "/Projects/Day 1 Pixel Art generator/", githubLink: "" },
    { day: 2, name: "To-Do List", demoLink: "#", githubLink: "#" },
    { day: 3, name: "Weather App", demoLink: "#", githubLink: "#" },
    // Keep adding as you build!
  ];
  
  // Function to create project cards dynamically
  const projectsGrid = document.getElementById('projects-grid');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
  
    projectCard.innerHTML = `
      <h2>Day ${project.day}: ${project.name}</h2>
      <div class="project-buttons">
        <a href="${project.demoLink}" target="_blank">Demo</a>
        <a href="${project.githubLink}" target="_blank">GitHub</a>
      </div>
    `;
  
    projectsGrid.appendChild(projectCard);
  });
  