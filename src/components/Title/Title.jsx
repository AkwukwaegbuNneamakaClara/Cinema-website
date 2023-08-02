import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css'; 


function Title() {
  return (
    <title style={titleStyle}>
      <div className="logo">
        <img src="/logo.jpg" alt="Cenima Website Logo" />
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
       
        </ul>
      </nav>
    </title>
  );
}

// Styles
const titleStyle = {
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