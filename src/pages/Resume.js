import React from 'react';

function Resume() {
  // Internal CSS styles
  const containerStyle = {
    maxWidth: '500px',
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
    marginBottom: '15px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My Resume</h1>
      <p style={paragraphStyle}>Download my resume below:</p>
      <a href="/resume.pdf" download>
        <button style={buttonStyle}>Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
