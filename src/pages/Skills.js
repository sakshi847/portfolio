import React from 'react';

const skills = [
  'JavaScript',
  'React.js',
  'Node.js',
  'Django',
  'Python',
  'HTML & CSS',
  'SQL & NoSQL Databases',
];

function Skills() {
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

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    fontSize: '18px',
    color: '#555',
    padding: '8px 0',
    backgroundColor: '#fff',
    margin: '5px 0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My Skills</h1>
      <ul style={listStyle}>
        {skills.map((skill, index) => (
          <li key={index} style={listItemStyle}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
