import React from 'react';
import { Link } from 'react-router-dom';
import './ScreeningList.css';

function ScreeningList({ screenings, selectedCategory, onSelectCategory }) {

  if (!screenings) {
    return null;
  }

  const screeningsByDate = screenings.reduce((acc, screening) => {
    const date = new Date(screening.date).toLocaleDateString('en-GB');

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(screening);
    return acc;
  }, {});


  return (
    <div className="screening-list">
      
      {/* ... */}
      {Object.entries(screeningsByDate).map(([date, screenings]) => (
        <div key={date}>
          <h2>{date}</h2>
          {screenings.map((screening) => (
            <Link to={`/booking/${screening.id}`} key={screening.id} className="movie-link">
              <div className="screening-card">
                <p>Date: {screening.date}</p>
                <p>Time: {screening.time}</p>
                <p>Title: {screening.title}</p>
                <p>Length: {screening.length}</p>
                <p>Category: {screening.category}</p>
                <img src={screening.poster} alt={screening.title} />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
    
  );
}

export default ScreeningList;
