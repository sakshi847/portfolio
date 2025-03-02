import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  // Internal CSS styles
  const contactContainerStyle = {
    maxWidth: '500px',
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

  return (
    <div style={contactContainerStyle}>
      <h1 style={headingStyle}>Contact Me</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;
