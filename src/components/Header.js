import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Navbar container with a dark gradient background
const Nav = styled.nav`
  background: linear-gradient(90deg, #0f0f0f, #1a1a1a, #2e2e2e, #1a1a1a, #0f0f0f);
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  animation: gradientMove 6s infinite alternate ease-in-out;
`;

// Navigation links with neon glow effect
const NavLink = styled(Link)`
  color: #e0e0e0;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: #00ffcc;
    text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

// Smooth Gradient Animation
const GradientAnimation = `
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
`;

function Header() {
  return (
    <>
      <style>{GradientAnimation}</style>
      <Nav>
        <NavLink to="/">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </>
  );
}

export default Header;
