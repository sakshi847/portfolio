import React from 'react';

function ProjectCard({ project }) {
  // Internal CSS styles
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease-in-out',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#666',
  };

  return (
    <div style={cardStyle} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
         onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
      <h3 style={titleStyle}>{project.title}</h3>
      <p style={descriptionStyle}>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
