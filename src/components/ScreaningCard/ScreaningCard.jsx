import React from 'react';
import './ScreeningCard.css'; // Import the ScreeningCard.css file

function ScreeningCard({ screening }) {
  const { date, time, title, poster, length } = screening;

  return (
    <div className="screening-card">
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Title: {title}</p>
      <p>Length: {length}</p>
      <img src={poster} alt={title} />
      {/* Add more screening details as needed */}
    </div>
  );
}

export default ScreeningCard;
