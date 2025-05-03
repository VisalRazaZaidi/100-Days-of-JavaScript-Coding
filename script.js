// Sample project data
const projects = [
    { day: 1, name: "Pixel Art Generator", demoLink: "/Projects/Day 1 Pixel Art generator/", githubLink: "https://github.com/VisalRazaZaidi/100-Days-of-JavaScript-Coding/tree/bfb40252d3108b57e5f8e85fd3b0a6ed2f6636fe/Projects/Day%201%20Pixel%20Art%20generator" },
    { day: 2, name: "Text Editor ", demoLink: "/Projects/Day 2 Text Editor/", githubLink: "https://github.com/VisalRazaZaidi/100-Days-of-JavaScript-Coding/tree/main/Projects/Day%202%20Text%20Editor" },
    { day: 3, name: "Weather App", demoLink: "https://minimal-weather-app-ui-design.vercel.app/", githubLink: "https://github.com/VisalRazaZaidi/MinimalWeatherAppUiDesign?tab=readme-ov-file" },
    { day: 4, name: "Password Generator", demoLink: "", githubLink: "" },
    { day: 5, name: "BMI Calulator", demoLink: "/Projects/Day 5 BMI Calulator/", githubLink: "https://github.com/VisalRazaZaidi/100-Days-of-JavaScript-Coding/tree/main/Projects/Day%205%20BMI%20Calulator" },
    { day: 6, name: "", demoLink: "", githubLink: "" },
    { day: 7, name: "", demoLink: "", githubLink: "" },
    { day: 8, name: "", demoLink: "", githubLink: "" },

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
  