import React from 'react';

function Footer() {
  // Internal CSS styles
  const footerStyle = {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return <footer style={footerStyle}>© 2025 My Portfolio. All Rights Reserved.</footer>;
}

export default Footer;
