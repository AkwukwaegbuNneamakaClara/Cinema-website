import React from 'react';
import './ScreeningList.css'; // Import the ScreeningList.css file
//import ScreeningCard from './SceaningCard/ScreeningCard'; // Import the ScreeningCard component

function ScreeningList({ screenings }) {
  // Create an object to group screenings by date
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
      {Object.entries(screeningsByDate).map(([date, screenings]) => (
        <div key={date}>
          <h2>{date}</h2>
          {screenings.map((screening) => (
            <div key={screening.id} className="screening-card">
              <p>Date: {screening.date}</p>
              <p>Time: {screening.time}</p>
              <p>Title: {screening.title}</p>
              <img src={screening.poster} alt={screening.title} />
              {/* Add more screening details as needed */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ScreeningList;
