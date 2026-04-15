// Load and parse YAML configuration
async function loadConfig() {
    try {
        const response = await fetch('config.yaml');
        const yamlText = await response.text();
        const config = jsyaml.load(yamlText);
        renderContent(config);
    } catch (error) {
        console.error('Error loading configuration:', error);
        document.getElementById('content').innerHTML = 
            '<p style="text-align: center; color: #e74c3c;">Failed to load configuration. Please check config.yaml file.</p>';
    }
}

// Render content from configuration
function renderContent(config) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    config.categories.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.className = 'category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.name;
        categorySection.appendChild(categoryTitle);

        const projectsGrid = document.createElement('div');
        projectsGrid.className = 'projects-grid';

        category.projects.forEach(project => {
            const projectCard = document.createElement('a');
            projectCard.className = 'project-card';
            projectCard.href = project.link;
            projectCard.target = '_blank';
            projectCard.rel = 'noopener noreferrer';

            const projectName = document.createElement('h3');
            projectName.className = 'project-name';
            projectName.innerHTML = project.name;

            const projectLink = document.createElement('div');
            projectLink.className = 'project-link';
            projectLink.textContent = project.link;

            const projectDesc = document.createElement('p');
            projectDesc.className = 'project-description';
            projectDesc.innerHTML = project.description;

            projectCard.appendChild(projectName);
            projectCard.appendChild(projectLink);
            projectCard.appendChild(projectDesc);

            projectsGrid.appendChild(projectCard);
        });

        categorySection.appendChild(projectsGrid);
        contentDiv.appendChild(categorySection);
    });
}

// Load configuration when page loads
document.addEventListener('DOMContentLoaded', loadConfig);
