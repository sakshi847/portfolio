import React from 'react';

function About() {
  // Internal CSS styles
  const aboutContainerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#333',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
  };

  return (
    <div style={aboutContainerStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p style={paragraphStyle}>
      "I am a passionate Full Stack Developer skilled in building dynamic, scalable, and efficient web applications using modern frontend and backend technologies like React, Django, Node.js, and databases. I love solving complex problems and creating seamless digital experiences."
      </p>
    </div>
  );
}

export default About;
