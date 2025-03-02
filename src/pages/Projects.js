import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { id: 1, title: 'Portfolio Website', description: 'A personal portfolio built with React.' },
  { id: 2, title: 'E-commerce App', description: 'A full-stack online store using MERN.' },
];

function Projects() {
  // Internal CSS styles
  const containerStyle = {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  };

  const projectsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Projects</h1>
      <div style={projectsContainerStyle}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
