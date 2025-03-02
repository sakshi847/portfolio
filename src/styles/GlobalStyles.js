import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1);
    background-size: 400% 400%;
    animation: gradientBG 10s ease infinite;
    color: #333;
  }

  h1, h2, h3 {
    color: #ff5722; /* Vibrant Orange Headings */
  }

  p {
    color: #4a148c; /* Deep Purple for Text */
  }

  a {
    color: #00bcd4; /* Cyan Blue Links */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #ffeb3b; /* Bright Yellow Hover Effect */
  }

  button {
    background-color: #ff4081; /* Bright Pink Buttons */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease-in-out;
  }

  button:hover {
    background-color: #e91e63; /* Darker Pink Hover Effect */
  }

  /* Smooth Animated Background */
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default GlobalStyles;
