import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css'; // Import the CSS file


function Title() {
  return (
    <header style={headerStyle}>
      <div className="logo">
        <img src="/path/to/logo.jpg" alt="Cenima Website Logo" />
        <span>Feature Flicks</span>
      </div>
      <nav>
        <ul style={navListStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

// Styles
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: '#007bff',
  color: '#fff',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

export default Title;
